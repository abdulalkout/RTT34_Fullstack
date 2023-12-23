require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DevCoop = require("./models/devCoopData");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.get("/developersCoop", (req, res) => {
  DevCoop.find({}, (err, allDevCoop) => {
    res.json({ devcoop: allDevCoop });
  });
});

app.listen(5000, (req, res) => {
  console.log("working on 5000 port");
});
