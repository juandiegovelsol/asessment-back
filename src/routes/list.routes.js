import express from "express";
import {
  getAllList,
  getOneList,
  createOneList,
  deleteOneList,
} from "../controllers/list.controller.js";
import { isAuthenticaded } from "../middlewares/isAuthenticaded.middle.js";

const router = express.Router();

router.get("/", isAuthenticaded, getAllList);
router.post("/", isAuthenticaded, createOneList);
router.get("/:id", isAuthenticaded, getOneList);
router.delete("/:id", isAuthenticaded, deleteOneList);

export default router;
