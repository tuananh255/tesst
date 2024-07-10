const productModel = require("../models/productModel");
const asyncHandle = require("express-async-handler");

// create user
const addProduct = async (req, res) => {
  const { _id } = req.user;
  try {
    const newProduct =
      await productModel.create({
        ...req.body,
        updateBy: _id,
      });

    res.status(201).send({
      newProduct: newProduct,
      success: true,
      message:
        "Create new product successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Create new product failed",
      success: false,
      error: error,
    });
  }
};

const getAllProduct = async (
  req,
  res
) => {
  try {
    const products =
      await productModel.find({});
    res.status(201).send({
      products,
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
const getsignProduct = async (
  req,
  res
) => {
  const { id } = req.params;
  try {
    const getProduct =
      await productModel
        .findById(id)
        .populate("updateBy");
    res.status(200).json({
      success: true,
      message:
        "Get user successfully !",
      getProduct,
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
const updateProduct = asyncHandle(
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
    //     await productModel.findByIdAndUpdate(
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
const deletesignProduct = async (
  req,
  res
) => {
  const { id } = req.params;
  try {
    const product =
      await productModel.findByIdAndDelete(
        id
      );
    res.status(200).json({
      success: true,
      message:
        "delete product successfully !",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "delete product error !",
    });
  }
};
const filterProduct = async (
  req,
  res
) => {
  const filters = req.body;
  const filterQuery = {};
  if (filters.city)
    filterQuery.city = filters.city;
  if (filters.type)
    filterQuery.type = filters.type;
  if (filters.price) {
    switch (filters.price) {
      case "1":
        filterQuery.price = {
          $lt: 500000,
        };
        break;
      case "2":
        filterQuery.price = {
          $gte: 500000,
          $lte: 1000000,
        };
        break;
      case "3":
        filterQuery.price = {
          $gte: 1000000,
          $lte: 2000000,
        };
        break;
      case "4":
        filterQuery.price = {
          $gte: 2000000,
          $lte: 3000000,
        };
        break;
      case "5":
        filterQuery.price = {
          $gt: 3000000,
        };
        break;
    }
  }
  if (filters.action)
    filterQuery.action = filters.action;

  try {
    const products =
      await productModel.find(
        filterQuery
      );
    res.status(200).json(products);
  } catch (error) {
    res
      .status(400)
      .json({ message: error.message });
  }
};
module.exports = {
  addProduct,
  getsignProduct,
  deletesignProduct,
  updateProduct,
  getAllProduct,
  filterProduct,
};
