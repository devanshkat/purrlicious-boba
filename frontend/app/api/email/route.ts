import { NextResponse, NextRequest } from "next/server";
import mongoose from 'mongoose';
import UserEmails from '../../../models/UserEmails';
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
//     }
  
  
  


// export async function GET() {
//   return NextResponse.json({
//     users: ["Billy", "Dev", "Abs", "Rasp", "Ada", "Shrev"],
//   });
// }

// interface SecretString {
//     accessKey: string;
//     secretAccessKey: string;
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


//     try {
//         const {email} = await req.json();
//         console.log("SUCCESS")
//         console.log(email);
        
//         // Log the email event to Amazon Pinpoint
//         const params = {
//             ApplicationId: projectId,
//             EndpointId: email, // Use email as the endpoint ID (or generate a unique one)
//             EndpointRequest: {
//               Address: email,
//               ChannelType: "EMAIL",
//               OptOut: "NONE", // Opt-in status for the email
//               Attributes: {
//                 signUpSource: ["web-form"], // Custom attribute: sign-up source
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
//                     NewsletterSignUp: { // Custom event name
//                       EventType: "NewsletterSignUp", // Name of the event to log
//                       Timestamp: new Date().toISOString(), // Log the current timestamp
//                       Attributes: {
//                         signUpSource: "web-form", // Additional attributes to track
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
//         console.log("secret ", secret.SecretString)

//         return NextResponse.json({
//             message: "Email recorded in PinPoint"
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

const nodemailer = require("nodemailer");
export async function GET() {
  const yourEmail = 'purrliciousbobanewsletter@gmail.com';
  const yourPassword = 'hgle hvzc psoc xzrb';
  
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: yourEmail,
          pass: yourPassword,
      },
  });
  
  const mailOptions = {
      from: yourEmail,
      to: 'adithya.bollu2022@gmail.com',
      subject: 'Test Email',
      text: 'Hello, this is a test email sent from purrliciousBoba!',
  };
  
  transporter.sendMail(mailOptions, (error :any, info:any) => {
      if (error) {
          console.log('Error:', error);
      } else {
          console.log('Email sent:', info.response);
      }
  });

  return NextResponse.json({
    status: 200
  });
}

// export async function POST(request: NextRequest) {
//     try {
//       const body = await request.json();
      
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: process.env.GMAIL_USER,
//           pass: process.env.GMAIL_APP_PASSWORD
//         }
//       });

//       const mailOptions = {
//         from: process.env.GMAIL_USER,
//         to: body.to || 'recipient@example.com',
//         subject: body.subject || 'Test Email',
//         text: body.text || 'Hello, this is a test email!'
//       };
  
//       const info = await transporter.sendMail(mailOptions);
      
//       // Return success response
//       return NextResponse.json({ 
//         status: 'success', 
//         message: 'Email sent successfully',
//         response: info.response 
//       }, { status: 200 });
  
//     } catch (error) {
//       console.error('Email sending error:', error);
      
//       // Return error response
//       return NextResponse.json({ 
//         status: 'error', 
//         message: 'Failed to send email' 
//       }, { status: 500 });
//     }
//   }

export async function POST(request: NextRequest) {
    const yourEmail = 'purrliciousbobanewsletter@gmail.com';
    const yourPassword = process.env.GOOGLE_APP_PASSWORD;
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
        if (!userEmailsDoc) {
            // If no document exists, create one
            const newDoc = new UserEmails({ emails: [email] });
            await newDoc.save();
            return NextResponse.json({ message: 'Email successfully subscribed' }, { status: 200 });
        }
        if (userEmailsDoc.emails.includes(email)) {
            return NextResponse.json({ message: 'Email is already subscribed' }, { status: 400 });
        }

        const signedUpHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Purrlicious Boba Newsletter</title>
</head>
<body style="margin: 0; padding: 0; width: 100%; background-color: #FED8B1; font-family: Arial, sans-serif;">
  <table style="width: 100%; border-spacing: 0; border-collapse: collapse; background-color: #FED8B1;">
    <!-- Header Section -->
    <tr>
      <td style="background-color: #FDBA74; text-align: center; padding: 5em;">
        <h1 style="margin: 0; font-size: 50px; font-weight: bold; color: #000;">
          Welcome to the Purrlicious Boba Newsletter!!
        </h1>
      </td>
    </tr>
    
    <!-- Main Content Section -->
    <tr>
      <td style="text-align: center; padding: 8em; font-size: 24px; color: #000;">
        <p style="margin: 0; font-size: 18px;">
          You are now officially signed up to the Purrlicious Boba Newsletter! You will receive emails weekly detailing when we will be selling boba and where we are selling from.
        </p>
      </td>
    </tr>
    
    <!-- Footer Section -->
    <tr>
      <td style="background-color: #FDBA74; text-align: center; padding: 10px;">
        <p style="margin: 0; font-size: 14px; color: #000;">&copy; 2024 Purrlicious Boba. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html>



        `;
        const mailOptions = {
            from: yourEmail,
            to: email,
            subject: 'Purrlicious Boba Newsletter!',
            // text: 'Hello, you have successfully signed up for the newsletter!',
            html: signedUpHTML
        };

        transporter.sendMail(mailOptions, (error :any, info:any) => {
            if (error) {
                console.log('Error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        // Append the new email to the list in the existing document
        userEmailsDoc.emails.push(email);
        await userEmailsDoc.save();

        return NextResponse.json({ message: 'Email successfully subscribed' }, { status: 200 });
    } catch(error) {
        console.error('Error saving email:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}