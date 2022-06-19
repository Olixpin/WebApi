/* Empty JS object to act as endpoint for all routes */
projectData = {};

/* Express to run server and routes */
import express from "express";

/* Start up an instance of app */
const app = express();

/* Dependencies */
import bodyParser from "body-parser";
/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import cors from "cors";
app.use(cors());

/* Initialize the main project folder*/
app.use(express.static("website"));

const port = 3000;
/* Spin up the server*/
const server = app.listen(port, listening);
function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);
}

// TODO-ROUTES!

// app.get("/addMovie", (req, res) => {
//   res.send(projectData);
// });

import postData from "./website/L3app";
// POST
// MOVIE EXAMPLE
const data = [];
app.post("/add", (req, res) => {
  data.push(req.body);
  console.log(data);
});

app.post("/", (req, res) => {
  res.send("POST request to homepage");
});

// const courses = [];
// app.post("/api/courses", (req, res) => {
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name,
//   };

//   courses.push(course);
//   res.send(course);
// });
