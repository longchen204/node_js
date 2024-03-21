// npm init -y
// npm i express
// chạy node index.js

//map. filter, reduce, some, every

// const express = require("express");
// const { engine } = require("express-handlebars");
// const path = require("path");

import express from "express";
import { engine } from "express-handlebars"; /*-- theo kiểu es6 ECMA*/
import path, { dirname } from "path";
import mongoose from "mongoose";

import { fileURLToPath } from "url";

// console.log( path.join(__dirname, "/views"));

const app = express();
const port = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/WD18339")
  .then(() => console.log("Connected!"));

app.use(express.json());

const _filename = fileURLToPath(import.meta.url);
const __dirname = dirname(_filename);

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "/views"));

//  ./views/layouts/main.handlebars

//router
import routerProduct from "./routers/product.router.js";
import routerCategory from "./routers/category.router.js";
import routerUser from "./routers/user.router.js";
import routerCommon from "./routers/common.router.js";

app.use("/product", routerProduct);
app.use("/category", routerCategory);
app.use("/user", routerUser);
app.use("/", routerCommon);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
