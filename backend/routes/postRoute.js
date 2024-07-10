const express = require("express");
const route = express.Router();

const {
  authMiddleware,
  isAdmin,
} = require("../middlewares/authMiddleware.js");
const {
  getsignPost,
  addPost,
  getAllPost,
  deletesignPost,
  updatePost,
  rating,
} = require("../controllers/postController.js");

route.post(
  "/add-post",
  authMiddleware,
  addPost
);
route.post(
  "/rating-post/:id",
  authMiddleware,
  rating
);
route.get("/all-post", getAllPost);
route.get(
  "/get-post/:id",
  authMiddleware,
  // isAdmin,
  getsignPost
);

route.delete(
  "/delete-post/:id",
  deletesignPost
);

module.exports = route;
