// /* Dependencies */
// const body = require("body");
// const bodyParser = require("body-parser");
// /* Middleware*/
// // Here we are configuring express to use body-parser as middle-ware.

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // Cors for cross origin allowance
// const cors = require("cors");
// app.use(cors());
// // Express to run serve and routes
// const express = require("express");
// const app = express();

/* Empty JS object to act as endpoint for all routes */
// projectData = { name: "Olix" };

// TODO-Express to run server and routes
const express = require("express");

// TODO-Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO-Cors for cross origin allowance

const cors = require("cors");
app.use(cors());

/* Initializing the main project folder */
app.use(express.static("/addMovie"));

// Listen
const port = 8080;

const server = app.listen(port, () => {
  console.log("server running");
  console.log(`running on server ${port}`);
});

// app.get("/", (req, res) => res.send(projectData));

// Routes & Post requests
// const data = [];
// // app.post("/", (req, res) => res.send("post received"));
// app.post("/addMovie", (req, res) => {
//   console.log(req.body);
//   data.push(req.body);
// });

//MOVIE EXAMPLE
const data = [];
app.post("/addMovie", addMovie);

function addMovie(req, res) {
  data.push(req.body);
  console.log(data);
}
