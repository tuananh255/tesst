const express = require("express");
const route = express.Router();

const {
  authMiddleware,
  isAdmin,
} = require("../middlewares/authMiddleware.js");
const {
  addProduct,
  deletesignProduct,
  getAllProduct,
  getsignProduct,
  updateProduct,
  filterProduct,
} = require("../controllers/productController.js");

route.post(
  "/add-product",
  authMiddleware,
  addProduct
);
route.get(
  "/all-product",
  getAllProduct
);
route.get(
  "/get-product/:id",
  authMiddleware,
  // isAdmin,
  getsignProduct
);
route.post(
  "/filter-product",
  authMiddleware,
  // isAdmin,
  filterProduct
);
route.delete(
  "/delete-product/:id",
  deletesignProduct
);

module.exports = route;
