import express from "express";
import cors from "cors";
import articles from "./routes/articles.js";
import user from "./routes/user.js";
import mongoose from "mongoose";
const server = express();
server.use(cors());

server.use("/api/v1/articles", articles);

server.use("/api/v1/user", user);

const port = 3000;

const connectToMongodb = () => {
  mongoose
    .connect(
      "mongodb+srv://Ntirushwa:mongodbMWDsv@cluster0.fxs0tjb.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("mongodb connected");
    })
    .catch(() => {
      console.log("mongodb not connected");
    });
};
server.listen(port, () => {
  console.log("server is running" + port);
  connectToMongodb();
});
