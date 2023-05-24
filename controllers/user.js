// import { trusted } from "mongoose";
import userModel from "../Model/userModel.js";

const createUser = async (req, res) => {
  try {
    const savedUser = await userModel.findOne({ email: req.body.email });
    if (savedUser) {
      res.status(409).json({
        message: "Sorry account already exist",
      });
    }
    const userInstance = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    userInstance.save().then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.send({ message: "failed to save data" });
  }
};

const signInUser = async (req, res) => {
  try {
    const savedUser = await userModel.findOne({ email: req.body.email });
    if (savedUser) {
      res.status(409).json({
        message: "welcome to my blog",
      });
    } else {
      res.send("go to sign up first!!!");
    }
    const userInstance = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    userInstance.save().then((data) => {
      res.send(data);
    });
  } catch {
    //
    //
    //
  }
};

export { createUser, signInUser };
