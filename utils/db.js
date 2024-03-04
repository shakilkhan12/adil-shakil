const mongoose = require("mongoose");
const connection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Database connected");
  } catch (error) {
    console.log("Connection failed -> ", error.message);
    return;
  }
};
module.exports = connection;
