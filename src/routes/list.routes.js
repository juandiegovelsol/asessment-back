import express from "express";
import {
  getAllList,
  getOneList,
  createOneList,
  deleteOneList,
} from "../controllers/list.controller.js";

const router = express.Router();

/* router.get("/", getAllList); */
router.post("/", createOneList);
/* router.get("/:id",getOneList);
router.delete("/:id",deleteOneList); */

export default router;
