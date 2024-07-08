const mongoose = require("mongoose"); // Erase if already required
// Declare the Schema of the Mongo model
const commentSchema =
  new mongoose.Schema(
    {
      content: {
        type: String,
        required: true,
      },
      postedBy: {
        type: mongoose.Schema.Types
          .ObjectId,
        ref: "User",
        required: true,
      },
      replies: [
        {
          content: String,
          postedBy: {
            type: mongoose.Schema.Types
              .ObjectId,
            ref: "User",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
    },
    {
      timestamps: true,
    }
  );
var postSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    countct: {
      type: String,
      require: true,
    },
    namnu: {
      type: String,
      require: true,
    },
    minTrinhDo: {
      type: String,
      require: true,
    },
    maxTrinhDo: {
      type: String,
      require: true,
    },
    dateStart: {
      type: Object,
      require: true,
    },
    laplai: {
      type: String,
      // require: true,
    },
    priceNam: {
      type: Number,
      require: true,
    },
    priceNu: {
      type: Number,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    images: [
      {
        public_id: String,
        url: String,
      },
    ],
    type: {
      type: String,
      require: true,
    },
    updateBy: {
      type: mongoose.Schema.Types
        .ObjectId,
      ref: "User",
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: {
          type: mongoose.Schema.Types
            .ObjectId,
          ref: "User",
        },
      },
    ],
    comments: [commentSchema],
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model(
  "Post",
  postSchema
);
