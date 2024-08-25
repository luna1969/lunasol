const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://luna:123$@luna.t5kxd.mongodb.net/?retryWrites=true&w=majority&appName=luna",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log(" M o n g o D B C o n e c t"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.listen(port, () =>
  console.log(`port: ${port} l i s t e n`)
);
