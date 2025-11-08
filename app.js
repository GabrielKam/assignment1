// import dependencies
const express = require("express");
const path = require("path");
const app = express();

// set ejs as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// serve static files (css, images, js)
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
// home Page
app.get("/", (req, res) => {
  res.render("pages/home", { title: "Home" });
});

// about Page
app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About Me" });
});

// projects Page
app.get("/projects", (req, res) => {
  res.render("pages/projects", { title: "My Projects" });
});

// contact Page
app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact" });
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

var indexRouter = require('./routes/index');
app.use('/', indexRouter);

