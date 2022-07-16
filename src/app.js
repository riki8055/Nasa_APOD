require("dotenv").config();
const path = require("path");
const express = require("express");
const apod = require("./utils/apod");
const app = express();

const port = process.env.PORT || 3000;

// Define paths for Express config
const publicDirPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

// Setup handlebars engine and views location
app.set("view engine", "ejs");
app.set("views", viewsPath);

// Setup static directory to serve
app.use(express.static(publicDirPath));

app.get("/", (req, res) => {
  res.render("header");
});

app.get("/apod", (req, res) => {
  apod(req.query.date ? req.query.date : "", (error, data) => {
    res.render("apod", { data, error });
  });
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
