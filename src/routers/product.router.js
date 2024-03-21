import express from "express";
import {
  deleteProduct,
  getById,
  index,
  postProduct,
  putProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", index);
router.get("/:id", getById);
router.post("/", postProduct);
router.put("/:id", putProduct);
router.delete("/:id", deleteProduct);

export default router;
