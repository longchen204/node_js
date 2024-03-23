import user from "../models/user.model.js";

export function userIndex(req, res) {
  user
    .find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch(() => {
      res.status(500).json({ Message: "Có lỗi" });
    });
}

export function getIdUser(req, res) {
  let id = req.params.id;
  if (id) {
    user
      .findById(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json({ Message: err });
      });
  } else {
    res.json({ Message: "không tìm thấy sản phẩm" });
  }
}

export function postUser(req, res) {
  const userNew = req.body;
  if (userNew != {}) {
    user
      .create(userNew)
      .then((data) => {
        res.status(201).json({
          Message: "Thêm thành công",
          data,
        });
      })
      .catch((err) => {
        res.status(400).json({ Message: err });
      });
  } else {
    res.status(400).json({ Message: "Có lỗi sảy ra" });
  }
}

export function putUser(req, res) {
  const id = req.params.id;
  if (id) {
    const userData = req.body;
    if (userData != {}) {
      user
        .findByIdAndUpdate(id, userData, { new: true })
        .then((data) => {
          res.json(data);
        })
        .catch(() => {
          res.json({ Message: "Đã có lỗi" });
        });
    } else {
      res.json({ Message: "Có lỗi" });
    }
  } else {
    res.json({ Message: "Không thực hiện được" });
  }
}

export function deleteUser(req, res) {
  let id = req.params.id;
  if (id) {
    user
      .findByIdAndDelete(id)
      .then((data) => {
        res.json(data);
      })
      .catch(() => {
        res.json({ Message: "Có lỗi sảy ra" });
      });
  } else {
    res.json({ Message: "Không tìm thấy dữ liệu" });
  }
}
