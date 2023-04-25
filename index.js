const express = require("express");
const app = express();
require("dotenv").config();
var session = require("express-session");
var path = require("path");

app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "dist")));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Route for the base URL
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/index.html");
});

// Route for the /services URL
app.get("/services", function (req, res) {
  res.sendFile(__dirname + "/src/services.html");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", {
    title: `🎊 ${err.status || 500} Error`,
  });
});

module.exports = app;
