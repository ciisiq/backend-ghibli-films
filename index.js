const express = require("express");

//set up express app
const app = express();

//Listen for request
const PORT = 8080;
app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

//Initialize the routes
// app.use(express.json());
app.use("/api", require("./routes/api"));

//Handle requests in Express
app.get("/api", (req, res) => {
  console.log("GET request");
  res.send({
    name: "Yoshi",
  });
});

app.get("/films", (req, res) => {
  res.status(200).send({
    tshirt: "👕",
    size: "large",
  });
});

app.get("films/:id", (req, res) => {
  const { id } = req.params;
});
