import express from "express";
import {
  indexCate,
  getByIdCate,
  postCate,
  putCate,
  deleteCate,
} from "../controllers/category.controller.js";
const router = express.Router();

router.get("/", indexCate);
router.get("/:id", getByIdCate);
router.post("/", postCate);
router.put("/:id", putCate);
router.delete("/:id", deleteCate);

export default router;
