const mongoose = require("mongoose"); // Erase if already required
// Declare the Schema of the Mongo model
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
