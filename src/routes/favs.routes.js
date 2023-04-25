import express from "express";
import { createOneFav, deleteOneFav } from "../controllers/favs.controller.js";

const router = express.Router();

router.post("/", createOneFav);
router.delete("/:id", deleteOneFav);

export default router;
