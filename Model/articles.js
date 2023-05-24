import mongoose, { Schema } from "mongoose";
// How to create a Model(eg:article)
const articleModel = new mongoose.Schema({
  // Here is were we goin 2 define our models
  Title: {
    type: String,
    required: "Title is required",
  },
  Content: {
    type: String,
    required: "Content is required",
  },
  Author: {
    type: String,
    required: "author required",
  },
  Image: {
    type: String,
    required: "The image is required",
  },
});

export default mongoose.model(
  // This model takesin name and Schema,it is the name that shall reflect in DB.
  "Article",
  articleModel
  //[Q] Y do I say article & articleModel & yet meaning the samething?
  //[A]The above line (the "name" and "rules" that will be aplied on that name)
);
