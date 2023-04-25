import express from "express";
import { register, generateToken } from "../controllers/user.controller.js";
import { login } from "../middlewares/login.middle.js";

const router = express.Router();

router.post("/login", login, generateToken);
router.post("/", register);

export default router;
