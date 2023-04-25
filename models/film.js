const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the film Schema & model
// Schema = Strucutre of the data
// Model -  Collection

const FilmSchema = new Schema({
  title: {
    type: String,
    required: [true, "Name field is required"],
  },

  genre: {
    type: String,
  },

  release: {
    type: String,
  },

  director: {
    type: String,
  },

  synopsis: {
    type: String,
  },

  poster: {
    type: Buffer,
  },
});
