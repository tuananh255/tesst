const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8000;
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const uploadRoute = require("./routes/uploadRoute");
const slideRoute = require("./routes/slideRoute");
const productRoute = require("./routes/productRoute");

const dbConnect = require("./config/dbConnect");

dbConnect();

const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/post", postRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/slide", slideRoute);
app.use("/api/product", productRoute);

app.listen(PORT, () => {
  console.log(
    `Server is running at PORT ${PORT}`
  );
});
