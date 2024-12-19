
// import UserEmails from "./UserEmails";
require('dotenv').config({path: ".env.local"});
const express = require("express");
const axios = require("axios");

const key = process.env.GOOGLE_API_KEY;
const app = express();
const MINS = 3
let data ;
app.get("/api", (req,res) => {
    res.json({"users": ["Billy", "Dev", "Abs", "Rasp", "Ada", "Shrev"]})
})

const mongoose = require("mongoose");
const UserEmails = require("./UserEmails");

async function getEvents() {
    // console.log(key)
    const today = new Date();
    const timeNow = today.toISOString();
    const maxTime = new Date (today.setDate(today.getDate() + 7 )).toISOString();
    let response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/cab1502e4c29c6a0108e1a52aeb75d5ff0e50f1671147ce108041889851ba3c4@group.calendar.google.com/events?key=${key}&timeMin=${timeNow}&timeMax=${maxTime}`);
    data = response.data.items;
    let tempData = [];
    for (let item of data) {
        // console.log(item);

        if (item.kind == "calendar#event") {
            let startDate = new Date(item.start.dateTime);
            let endDate = new Date(item.end.dateTime);
            let obj = {
                id: "",
                title: "",
                startTime: "",
                endTime: "",
                location: "",  
            }

            obj.title = item.summary;
            obj.id = item.id;
            if (item.location) {
                obj.location = item.location.split(",").slice(0, 2).join();
            } else {
                obj.location = "";
            }
                        
            obj.startTime = startDate.toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            })

            obj.endTime = endDate.toLocaleString("en-US", {
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            })
            tempData.push(obj);
        }
    }

    data = tempData;
}

async function sendEmailsWeekly() {
    const today = new Date().getDay();
    if (today == 3) {
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI);
        const userEmailsDoc = await UserEmails.findOne({});
        const emails = userEmailsDoc.emails;

        console.log(emails);
        console.log(data);
    }
}

setInterval(getEvents, MINS*1000);
setInterval(sendEmailsWeekly, 5_000);

app.listen(5000, () => {console.log("Server Online on Port 5000")})