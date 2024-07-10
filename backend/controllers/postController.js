const postModel = require("../models/postModel");
const asyncHandle = require("express-async-handler");

// create user
const addPost = async (req, res) => {
  const { _id } = req.user;

  try {
    const newPost =
      await postModel.create({
        ...req.body,
        updateBy: _id,
      });

    res.status(201).send({
      newPost: newPost,
      success: true,
      message:
        "Create new post successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Create new post failed",
      success: false,
      error: error,
    });
  }
};

// get all users
const getAllPost = async (req, res) => {
  try {
    const Posts = await postModel.find(
      {}
    );
    res.status(201).send({
      Posts,
      success: true,
      message: "get all successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "get all False",
      success: false,
      error: error,
    });
  }
};

// get a user
const getsignPost = async (
  req,
  res
) => {
  const { id } = req.params;
  try {
    const getPost = await postModel
      .findById(id)
      .populate("updateBy")
      .populate("ratings.postedby");
    res.status(200).json({
      success: true,
      message:
        "Get user successfully !",
      getPost,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Get user error !",
    });
  }
};

// update user
const updatePost = asyncHandle(
  async (req, res) => {
    // const { _id } = req.params;
    // try {
    //   // Hash lại mật khẩu mới nếu có
    //   if (req.body.password) {
    //     const salt =
    //       await bcrypt.genSaltSync(10);
    //     req.body.password =
    //       await bcrypt.hash(
    //         req.body.password,
    //         salt
    //       );
    //   }
    //   const user =
    //     await postModel.findByIdAndUpdate(
    //       _id,
    //       {
    //         name: req?.body?.name,
    //         email: req?.body?.email,
    //         mobile: req?.body?.mobile,
    //         password:
    //           req?.body?.password,
    //         role: req?.body?.role,
    //       },
    //       {
    //         new: true,
    //       }
    //     );
    //   res.json(user);
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).send({
    //     success: false,
    //     message: "Update user error !",
    //   });
    // }
  }
);

// delete a user
const deletesignPost = async (
  req,
  res
) => {
  const { id } = req.params;
  try {
    const post =
      await postModel.findByIdAndDelete(
        id
      );
    res.status(200).json({
      success: true,
      message:
        "delete user successfully !",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "delete user error !",
    });
  }
};
const filterPost = async (
  req,
  res
) => {};
const rating = asyncHandle(
  async (req, res) => {
    const { _id } = req.user;
    const { star, comment } = req.body;

    try {
      // Tìm bài đăng cần được đánh giá
      const post =
        await postModel.findById(
          req.params.id
        );
      if (!post) {
        return res.status(404).send({
          success: false,
          message: "Post not found",
        });
      }

      // Thêm đánh giá mới vào bài đăng
      const newRating = {
        star,
        comment,
        postedby: _id,
      };

      post.ratings.push(newRating);

      // Tính tổng số đánh giá
      post.totalrating =
        post.ratings.length;

      // Lưu bài đăng đã cập nhật vào cơ sở dữ liệu
      await post.save();

      res.status(200).send({
        success: true,
        message:
          "Rating added successfully",
        post,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error in Rating API",
        error,
      });
    }
  }
);
module.exports = {
  addPost,
  getsignPost,
  deletesignPost,
  updatePost,
  getAllPost,
  rating,
  filterPost,
};
