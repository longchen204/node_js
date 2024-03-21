import express from "express";
import {
  userIndex,
  getIdUser,
  postUser,
  putUser,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userIndex);
router.get("/:id", getIdUser);
router.post("/", postUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
