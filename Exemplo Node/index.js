const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(`mongodb://${process.env.DB_URL}:27017/nodemongo`, {
  useNewUrlParser: true
});

app.get("/", (req, res) => {
  return res.send("Hello World Louco");
});

app.get("/login", (req, res) => {
  return res.send("Só vem");
});

app.get("/sou", (req, res) => {
  return res.send("Só vem rico");
});

app.listen(3000);
