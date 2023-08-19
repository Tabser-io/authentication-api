const express = require("express");
const cookieParser = require("cookie-parser");

const authRoute = require("./routes/auth");

port = process.env.APP_PORT || 8080;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
