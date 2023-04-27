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
router.get("/films/:id", (req, res, next) => {
  res.send({
    type: "GET",
  });
});

//Create a new film to the db
router.post("/films", (req, res, next) => {
  // Old form to do:
  // var film = new Film(req.body);
  // film.save();

  //How to create and save in Mongodb (it's return a Promise)
  Film.create(req.body)
    .then((film) => {
      res.send(film);
    })
    .catch(next);
  // Use a middleware to handle the erro
});

//change a films from the db
router.put("/films/:id", (req, res, next) => {
  Film.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    //findone to show the user the changes
    Film.findOne({ _id: req.params.id }).then((film) => {
      res.send(film);
    });
  });
});

//delete a film from the db
router.delete("/films/:id", (req, res, next) => {
  //Mongo Method
  Film.findByIdAndRemove({ _id: req.params.id }).then((ninja) => {
    res.send(ninja);
  });
});

module.exports = router;
