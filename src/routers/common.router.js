import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { id: 1, name: "Long Hoàng Huy" });
});

router.get("/tintuc", (req, res) => {
  res.send("Tin Tức");
});

export default router;
