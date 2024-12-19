import { NextResponse } from "next/server";
import mongoose from 'mongoose';
import UserEmails from '../../../models/UserEmails';
const nodemailer = require("nodemailer");


export async function PUT(request: Request) {
  const yourEmail = 'purrliciousbobanewsletter@gmail.com';
  const yourPassword = 'hgle hvzc psoc xzrb';
  
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: yourEmail,
          pass: yourPassword,
      },
  });

  try {
    const body = await request.json();
    const { email } = body;
    console.log(email);

    // Check for valid email
    if (!email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        return NextResponse.json({ message: 'Invalid email address' }, { status: 400 });
    }

    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
    throw new Error('MongoDB URI is not defined');
    }
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI || '');
    }

    const userEmailsDoc = await UserEmails.findOne({});
    const unsubHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unsubscribe</title>
</head>
<body style="margin: 0; padding: 0; width: 100%; background-color: #FED8B1; font-family: Arial, sans-serif;">
  <table  style="width: 100%; border-spacing: 0; border-collapse: collapse; background-color: #FED8B1;">
    <tr>
      <td style="background-color: #FDBA74; text-align: center; padding: 5em;">
        <h1 style="margin: 0; font-size: 50px; font-weight: bold; color: #000;">We Are Sad to See You Leave :(</h1>
      </td>
    </tr>
    <tr >
      <td style="text-align: center; padding: 8em; font-size: 24px; color: #000;">
        <p style="margin: 0;">You have now officially unsubscribed to the Purrlicious Boba Newsletter! You will no longer receive emails weekly detailing events.</p>
      </td>
    </tr>
    <tr>
      <td style="background-color: #FDBA74; text-align: center; padding: 10px; font-size: 14px; color: #000;">
        <p style="margin: 0;">&copy; 2024 Purrlicious Boba. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
    if (userEmailsDoc.emails.includes(email)) {
      const mailOptions = {
        from: yourEmail,
        to: email,
        subject: 'Unsubscribed from NewsLetter',
        html: unsubHTML,
      };
  
      transporter.sendMail(mailOptions, (error :any, info:any) => {
          if (error) {
              console.log('Error:', error);
          } else {
              console.log('Email sent:', info.response);
          }
      });
  
      // Append the new email to the list in the existing document
      userEmailsDoc.emails = userEmailsDoc.emails.filter((address: any) => address != email);
      await userEmailsDoc.save();
    }
    else {
      return NextResponse.json({ message: 'Email is not subscribed' }, { status: 400 });
    }

   

    return NextResponse.json({ message: 'Email successfully subscribed' }, { status: 200 });
  } catch(error) {
      console.error('Error saving email:', error);
      return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
// const AWS = require("aws-sdk")


// import {
//     SecretsManagerClient,
//     GetSecretValueCommand,
//   } from "@aws-sdk/client-secrets-manager";
  
//   const secret_name = "bobaTea";
  
//   const client = new SecretsManagerClient({
//     region: "us-east-2",
//   });
  
//   let response;

//   async function getResp(){
//     try {
//         response = await client.send(
//         new GetSecretValueCommand({
//             SecretId: secret_name,
//             VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
//         })
//         );
//         return response
//     } catch (error) {
//         throw error;
//     }
// }



// export async function POST(req: Request) {
//     const projectId = "2f93382f28414322a4a88be1090b4b15";
//     const secret = await getResp();
//     const secretString: any = secret.SecretString;

//     const pinpoint = new AWS.Pinpoint({
//         region: "us-east-2",
//         accessKeyId: secretString.accessKey,
//         secretAccessKey: secretString.secretAccessKey
//     })

//     async function getEndpoint(params: any) {
//         try {
//           const data = await pinpoint.getEndpoint(params).promise();
//           console.log('Endpoint information:', data);
//           console.log('OptOut status:', data.EndpointResponse.OptOut); // Check the OptOut status
//         } catch (err) {
//           console.error('Error fetching endpoint information:', err);
//         }
//       }


//     try {
//         const {email} = await req.json();
//         console.log(email)
//         console.log("SUCCESS")
//         console.log(email);
        
//         // Log the email event to Amazon Pinpoint
//         const params = {
//             ApplicationId: projectId,
//             EndpointId: email, // Use email as the endpoint ID (or generate a unique one)
//             EndpointRequest: {
//               Address: email,
//               ChannelType: "EMAIL",
//               OptOut: "ALL", // Opt-out status for the email
//               Attributes: {
//                 unsubSource: ["web-form"], // Custom attribute: sign-up source
//                 subscribed: ["no"],
//                 email: [email]
//               },
//               Demographic: {
//                 Timezone: "America/New_York", // You can dynamically determine time zone if needed
//               },
//             },
//           };
  
//         // Send the event to Pinpoint
//         // const result = await pinpoint.putEvents(params).promise();

//         const result = await pinpoint.updateEndpoint(params).promise()


//         const eventParams = {
//             ApplicationId: projectId,
//             EventsRequest: {
//               BatchItem: {
//                 [email]: { // The event is associated with the user's email (endpoint)
//                   Endpoint: {
//                     ChannelType: "EMAIL",
//                     Address: email,
//                   },
//                   Events: {
//                     NewsLetterUnsub: { // Custom event name
//                       EventType: "NewsletterUnsub", // Name of the event to log
//                       Timestamp: new Date().toISOString(), // Log the current timestamp
//                       Attributes: {
//                         unsubSource: "web-form", // Additional attributes to track
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           };
      
//         // Record the event in Pinpoint
//         const eventResult = await pinpoint.putEvents(eventParams).promise();
//         console.log("Event recorded successfully:", eventResult);
//         // console.log("secret ", secret.SecretString)
        
//         const fetchParams = {
//             ApplicationId: projectId,  // Replace with your Pinpoint project ID
//             EndpointId: 'adithya.bollu@gmail.com',  // Use the email or endpoint ID you want to check
//         };
//         getEndpoint(fetchParams);

//         return NextResponse.json({
//             message: "Email unrecorded in PinPoint"
//         })
//     }
//     catch(error) {
//         console.log("Error")
//         console.log(error)
//         return NextResponse.json(
//             { error: "Failed to add email to Pinpoint" },
//             { status: 500 }
//         )
//     }
// }