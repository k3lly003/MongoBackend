import express from "express";
import bodyParser from "body-parser";
import { createUser, signInUser } from "../controllers/user.js";

const router = express.Router();
router.use(bodyParser.json());

router.post("/sign", createUser);
router.get("/signIn", signInUser);
export default router;
