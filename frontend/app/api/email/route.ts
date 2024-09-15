import { NextResponse } from "next/server";
const AWS = require("aws-sdk")


import {
    SecretsManagerClient,
    GetSecretValueCommand,
  } from "@aws-sdk/client-secrets-manager";
  
  const secret_name = "bobaTea";
  
  const client = new SecretsManagerClient({
    region: "us-east-2",
  });
  
  let response;

  async function getResp(){
    try {
        response = await client.send(
        new GetSecretValueCommand({
            SecretId: secret_name,
            VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
        })
        );
        return response
    } catch (error) {
        throw error;
    }
    }
  
  
  


export async function GET() {
  return NextResponse.json({
    users: ["Billy", "Dev", "Abs", "Rasp", "Ada", "Shrev"],
  });
}



export async function POST(req: Request) {
    const projectId = "2f93382f28414322a4a88be1090b4b15";
    const secret = await getResp();
    const {accessKey, secretAccessKey} = secret.SecretString

    const pinpoint = new AWS.Pinpoint({
        region: "us-east-2",
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey
    })


    try {
        const {email} = await req.json();
        console.log("SUCCESS")
        console.log(email);
        
        // Log the email event to Amazon Pinpoint
        const params = {
            ApplicationId: projectId,
            EndpointId: email, // Use email as the endpoint ID (or generate a unique one)
            EndpointRequest: {
              Address: email,
              ChannelType: "EMAIL",
              OptOut: "NONE", // Opt-in status for the email
              Attributes: {
                signUpSource: ["web-form"], // Custom attribute: sign-up source
              },
              Demographic: {
                Timezone: "America/New_York", // You can dynamically determine time zone if needed
              },
            },
          };
  
        // Send the event to Pinpoint
        // const result = await pinpoint.putEvents(params).promise();

        const result = await pinpoint.updateEndpoint(params).promise()


        const eventParams = {
            ApplicationId: projectId,
            EventsRequest: {
              BatchItem: {
                [email]: { // The event is associated with the user's email (endpoint)
                  Endpoint: {
                    ChannelType: "EMAIL",
                    Address: email,
                  },
                  Events: {
                    NewsletterSignUp: { // Custom event name
                      EventType: "NewsletterSignUp", // Name of the event to log
                      Timestamp: new Date().toISOString(), // Log the current timestamp
                      Attributes: {
                        signUpSource: "web-form", // Additional attributes to track
                      },
                    },
                  },
                },
              },
            },
          };
      
        // Record the event in Pinpoint
        const eventResult = await pinpoint.putEvents(eventParams).promise();
        console.log("Event recorded successfully:", eventResult);
        console.log("secret ", secret.SecretString)

        return NextResponse.json({
            message: "Email recorded in PinPoint"
        })
    }
    catch(error) {
        console.log("Error")
        console.log(error)
        return NextResponse.json(
            { error: "Failed to add email to Pinpoint" },
            { status: 500 }
        )
    }
}