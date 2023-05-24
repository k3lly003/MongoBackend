import mongoose, { Schema } from "mongoose";

const userModel = new mongoose.Schema({
  name: {
    type: String,
    required: "please name is required",
  },
  email: {
    type: String,
    required: "email is required",
  },
  password: {
    type: String,
    required: "image is required",
  },
});

export default mongoose.model("User", userModel);
