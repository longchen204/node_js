// const productList = [
//   { id: 1, name: "product1", price: 300 },
//   { id: 2, name: "abc", price: 600 },
//   { id: 3, name: "abc", price: 900 },
// ];

import product from "../models/product.model.js";
import category from "../models/category.model.js";
// [GET] /product
export function index(req, res) {
  const filter = {};
  const request = req.query.request;
  product
    .find({ name: request })
    .populate("categoryId")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ Message: "Có lỗi sảy ra" });
    });
}

// [GET] /product/:id
export function getById(req, res) {
  let id = req.params.id;
  if (id) {
    product
      .findById(id)
      .populate("categoryId")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch(() => {
        res.status(400).json({ Message: "Không tìm thấy sản phẩm" });
      });
  } else {
    res.status(400).json({ Message: "Có lỗi sảy ra" });
  }
}

// [POST] /product
export function postProduct(req, res) {
  const productNew = req.body;
  if (productNew != {}) {
    product
      .create(productNew)
      .then((data) => {
        res.status(201).json(data);
      })
      .catch(() => {
        res.status(500).json({ Message: "Có lỗi sảy ra" });
      });
  } else {
    res.status(400).json({ Message: "Không thể thực hiện " });
  }
}

// [PUT] /product/:id
export function putProduct(req, res) {
  const id = req.params.id;
  // console.log(id);
  if (id) {
    const productData = req.body;
    if (productData != {}) {
      product
        .findByIdAndUpdate(id, productData, { new: true })
        .then((data) => res.json(data))
        .catch(() => res.json({ Message: "Không thể sửa" }));
    } else {
      res.json({ Message: "Không tìm được dữ liệu" });
    }
  } else {
    res.json({ Message: "Không tìm thấy dữ liệu" });
  }
}

// [DELETE] /product/:id
export function deleteProduct(req, res) {
  let id = req.params.id;
  if (id) {
    product
      .findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ Message: "Không thể xóa" });
      });
  } else {
    res.json({ Message: "Không tìm thấy dữ liệu" });
  }
}
