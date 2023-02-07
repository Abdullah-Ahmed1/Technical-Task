const mongoose = require("mongoose");
var bookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  author:{
    type:String,
  },
  no_of_pages: {
    type: Number,
  },
  published_at:{
    type:Date
  }
  
});
mongoose.model("Book", bookSchema);
