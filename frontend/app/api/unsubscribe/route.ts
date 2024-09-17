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



export async function POST(req: Request) {
    const projectId = "2f93382f28414322a4a88be1090b4b15";
    const secret = await getResp();
    const secretString: any = secret.SecretString;

    const pinpoint = new AWS.Pinpoint({
        region: "us-east-2",
        accessKeyId: secretString.accessKey,
        secretAccessKey: secretString.secretAccessKey
    })

    async function getEndpoint(params: any) {
        try {
          const data = await pinpoint.getEndpoint(params).promise();
          console.log('Endpoint information:', data);
          console.log('OptOut status:', data.EndpointResponse.OptOut); // Check the OptOut status
        } catch (err) {
          console.error('Error fetching endpoint information:', err);
        }
      }


    try {
        const {email} = await req.json();
        console.log(email)
        console.log("SUCCESS")
        console.log(email);
        
        // Log the email event to Amazon Pinpoint
        const params = {
            ApplicationId: projectId,
            EndpointId: email, // Use email as the endpoint ID (or generate a unique one)
            EndpointRequest: {
              Address: email,
              ChannelType: "EMAIL",
              OptOut: "ALL", // Opt-out status for the email
              Attributes: {
                unsubSource: ["web-form"], // Custom attribute: sign-up source
                subscribed: ["no"],
                email: [email]
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
                    NewsLetterUnsub: { // Custom event name
                      EventType: "NewsletterUnsub", // Name of the event to log
                      Timestamp: new Date().toISOString(), // Log the current timestamp
                      Attributes: {
                        unsubSource: "web-form", // Additional attributes to track
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
        // console.log("secret ", secret.SecretString)
        
        const fetchParams = {
            ApplicationId: projectId,  // Replace with your Pinpoint project ID
            
        };
        getEndpoint(fetchParams);

        return NextResponse.json({
            message: "Email unrecorded in PinPoint"
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