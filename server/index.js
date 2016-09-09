"use strict";

require("dotenv").config();
const mongoose = require("mongoose");
const imgur = require("imgur");
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const apiRoutes = require("./routes/api.js");

const app = express();
const PORT = process.env.PORT || 3000;


// MongoDB
mongoose.connect("mongodb://localhost/node-imgur-gallery-example");


// Imgur
imgur.setClientId(process.env.IMGUR_CLIENT_ID);


// Middleware
app.use(express.static(`${__dirname}/../public`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method"));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(methodOverride("X-Method-Override"));
app.set("view engine", "ejs");
app.set("views", `${__dirname}/views`);


// Routes
app.use("/api", apiRoutes);


// Clientside application
app.use((req, res) => {
  res.render("index", {});
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
