import { json } from "express";
import category from "../models/category.model.js";

export function indexCate(req, res) {
  category
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.json({ message: "Có lỗi sảy ra" });
    });
}

export function getByIdCate(req, res) {
  let id = req.params.id;
  if (id) {
    category
      .findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ message: "Có lỗi rồi " });
      });
  } else {
    res.json({ message: "Không tìm được id" });
  }
}

export function postCate(req, res) {
  const categoryNew = req.body;
  if (categoryNew != {}) {
    category
      .create(categoryNew)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ message: "Có lỗi rồi" });
      });
  } else {
    res.json({ message: "không thêm được" });
  }
}

export function putCate(req, res) {
  const id = req.params.id;
  if (id) {
    const cateData = req.body;
    if (cateData != {}) {
      category
        .findByIdAndUpdate(id, cateData, { new: true })
        .then((data) => res.json(data))
        .catch(() => res.json({ message: "Lỗi rồi" }));
    } else {
      res.json({ Message: "Không tìm được dữ liệu" });
    }
  } else {
    res.json({ Message: "Không tìm được dữ liệu" });
  }
}

export function deleteCate(req, res) {
  let id = req.params.id;
  if (id) {
    category
      .findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ message: "Có lỗi rồi" });
      });
  } else {
    res.json({ Message: "Không tìm được dữ liệu" });
  }
}
