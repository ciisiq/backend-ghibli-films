//all the routes here
const express = require("express");
const router = express.Router();

//show all the films from the db
router.get("/films", (req, res) => {
  res.send({
    type: "GET",
  });
});

//Create a new film to the db
router.post("/films", (req, res) => {
  res.send({
    type: "POST",
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
