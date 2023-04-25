const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Route for the base URL
app.get("/", (req, res) => {
  res.render("index");
});

// Route for the /services URL
app.get("/services", (req, res) => {
  res.render("services");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    title: `🎊 ${err.status || 500} Error`,
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = app;
