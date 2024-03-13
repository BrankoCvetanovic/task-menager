const mongoose = require("mongoose");

async function connectDB(url) {
  mongoose.connect(url);
  console.log("Connected to DB");
}

module.exports = connectDB;
