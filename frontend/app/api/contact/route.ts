import { NextResponse, NextRequest } from "next/server";
import mongoose from 'mongoose';
import UserEmails from '../../../models/UserEmails';
const nodemailer = require("nodemailer");

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
        const { firstName, lastName, email, message } = body;

        



        const contactHTML = `
<!DOCTYPE html>
<html lang="en">
<body>
        <p>${message}</p>
        <p>Sincerely ${firstName} ${lastName}</p>
        <p>Contact Us ${email}</p>
</body>
</html>



        `;
        const mailOptions = {
            from: yourEmail,
            to:"purrliciousbobanewsletter@gmail.com",
            subject: 'Contact!',
            // text: 'Hello, you have successfully signed up for the newsletter!',
            html: contactHTML
        };

        transporter.sendMail(mailOptions, (error :any, info:any) => {
            if (error) {
                console.log('Error:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });


        return NextResponse.json({ message: 'Email successfully Sent!' }, { status: 200 });
    } catch(error) {
        console.error('Error saving email:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}