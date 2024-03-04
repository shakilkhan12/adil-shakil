const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: false,
  },
});
const AuthorModel = mongoose.model("author", authorSchema);
module.exports = AuthorModel;
