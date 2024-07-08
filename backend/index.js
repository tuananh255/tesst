const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const uploadRoute = require("./routes/uploadRoute");
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

app.listen(PORT, () => {
  console.log(
    `Server is running at PORT ${PORT}`
  );
});
