import express from "express";
import bodyParser from "body-parser";
import {
  createArticles,
  updateArticles,
  deleteArticles,
  readOneArticle,
  updateArticle,
} from "../controllers/articles.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/names/:myName", createArticles);

router.put("/names/:myNumber", updateArticles);

router.delete("/names/one", deleteArticles);

router.get("/names/reqId", readOneArticle);

router.patch("/names/:nameId", updateArticle);

export default router;
