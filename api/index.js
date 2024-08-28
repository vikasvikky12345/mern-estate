const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { default: mongoose } = require("mongoose");
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const port = 8000;
const app = express();
app.get("/", (req, res) => res.send("hello vikas"));
app.listen(port, () => console.log(`server running on ${port}`));
