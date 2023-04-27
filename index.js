const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

//conect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/ghibli");
// mongoose.connect("mongodb://localhost/filmgo");

//remove duplicated on mongodb
mongoose.Promise = global.Promise;

//Listen for request
const PORT = 8080;
app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

//Middleware
app.use(bodyParser.json());

//Initialize the routes
app.use("/api", require("./routes/api"));

//Handle requests in Express
// app.get("/api", (req, res) => {
//   console.log("GET request");
//   res.send({
//     name: "Yoshi",
//   });
// });

// app.get("/films", (req, res) => {
//   res.status(200).send({
//     tshirt: "👕",
//     size: "large",
//   });
// });

// app.get("films/:id", (req, res) => {
//   const { id } = req.params;
// });
