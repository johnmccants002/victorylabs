const express = require("express");
const app = express();

app.use(express.static(__dirname));

// Route for the base URL
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/index.html");
});

// Route for the /services URL
app.get("/services", function (req, res) {
  res.sendFile(__dirname + "/src/services.html");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
