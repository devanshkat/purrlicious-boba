
require('dotenv').config({path: ".env.local"});
const express = require("express");
const axios = require("axios");

const key = process.env.GOOGLE_API_KEY;
const app = express();
const MINS = 10
let data ;
app.get("/api", (req,res) => {
    res.json({"users": ["Billy", "Dev", "Abs", "Rasp", "Ada", "Shrev"]})
})


async function sendEmails() {
    // console.log(key)
    const timeNow = new Date().toISOString();
    let response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/cab1502e4c29c6a0108e1a52aeb75d5ff0e50f1671147ce108041889851ba3c4@group.calendar.google.com/events?key=${key}&timeMin=${timeNow}`);
    data = response.data.items;
    for (let item of response.data.items) {
        console.log(item.summary);
    }
}

async function sendEmailsWeekly() {

}

setInterval(sendEmails, MINS*1000);

app.listen(5000, () => {console.log("Server Online on Port 5000")})