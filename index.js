const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conect to mongodb
//The LOCALHOST was not working, put the number for to fix it
mongoose.connect(`mongodb://${process.env.MONGO_URL}:27017/ghibli`);
//remove duplicated on mongodb
mongoose.Promise = global.Promise;
//Listen for request
const PORT = 8080;
app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

//Middlewares:
app.use(express.static("public"));

app.use(bodyParser.json());

//Initialize the routes
app.use("/api", require("./routes/api"));

// Middleware for handling error;
app.use((err, req, res, next) => {
  //To show the user what is wrong if fail
  res.status(422).send({ error: err.message });
});
