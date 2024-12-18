const express = require("express");
const axios = require("axios");

const app = express();

app.get("/api", (req,res) => {
    res.json({"users": ["Billy", "Dev", "Abs", "Rasp", "Ada", "Shrev"]})
})


async function sendEmails() {
    let response = await axios.get("http://localhost:3000/api/calendar");
    console.log(response.data);
}

setInterval(sendEmails, 3000)

app.listen(5000, () => {console.log("Server Online on Port 5000")})