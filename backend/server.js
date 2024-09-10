const express = require("express");

const app = express();

app.get("/api", (req,res) => {
    res.json({"users": ["Billy", "Dev", "Abs", "Rasp", "Ada", "Shrev"]})
})


app.listen(5000, () => {console.log("Server Online on Port 5000")})