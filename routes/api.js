//all the routes here
const express = require("express");
const router = express.Router();
const Film = require("../models/film");

//show all the films from the db
router.get("/films", (req, res) => {
  res.send({
    type: "GET",
  });
});

//show a film by id from the db
router.get("/films/:id", (req, res) => {
  res.send({
    type: "GET",
  });
});

//Create a new film to the db
router.post("/films", (req, res) => {
  // console.log(req.body);
  // var film = new Film(req.body);
  //save in the db
  // film.save();

  //How to create and save in Mongodb (it's return a Promise)
  Film.create(req.body).then((film) => {
    res.send(film);
  });
});

//change a films from the db
router.put("/films/:id", (req, res) => {
  res.send({
    type: "PUT",
  });
});

//delete a film from the db
router.delete("/films/:id", (req, res) => {
  res.send({
    type: "DELETE",
  });
});

module.exports = router;
