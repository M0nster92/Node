const mongoose = require("mongoose");
const Joi = require("joi");
const { genreSchema } = require("./genres");

const Movie = mongoose.model(
  "movies",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    genre: {
      type: genreSchema,
      required: true,
    },
    numberInStock: {
      type: Number,
      required: false,
      min: 0,
      max: 255,
    },
    dailyRentalRate: {
      type: Number,
      required: false,
      min: 0,
      max: 255,
    },
  })
);

function validateMovie(movie) {
  const schema = {
    title: Joi.string().min(5).max(50).required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().min(0).required(),
    dailyRentalRate: Joi.number().min(0).required(),
  };

  return Joi.validate(movie, schema);
}

module.exports = { Movie, validateMovie };
