const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb://127.0.0.1:27017/Task",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("connected successfully with database");
    } else {
      console.log("error in connection " + err);
    }
  }
);
module.exports = mongoose.connect;
require("../models/book.model");