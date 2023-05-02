import express from "express";
import { createOneFav, deleteOneFav } from "../controllers/favs.controller.js";
import { isAuthenticaded } from "../middlewares/isAuthenticaded.middle.js";

const router = express.Router();

router.post("/", isAuthenticaded, createOneFav);
router.delete("/:id", isAuthenticaded, deleteOneFav);

export default router;
