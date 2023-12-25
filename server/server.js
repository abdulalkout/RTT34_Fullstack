require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DevCoop = require("./models/devCoopData");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: false }));

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  next();
});

app.get("/developersCoop", (req, res) => {
  DevCoop.find({}, (err, allDevCoop) => {
    res.json({ devcoop: allDevCoop });
    // console.log(allDevCoop);
  });
});

app.get("/cooperation", (req, res) => {
  res.redirect("/");
});

app.post("/cooperation", (req, res) => {
  DevCoop.create(req.body, (err, createDevCoop) => {
    console.log(createDevCoop);
    res.redirect("/cooperation");
  });
});

app.listen(5000, (req, res) => {
  console.log("working on 5000 port");
});
