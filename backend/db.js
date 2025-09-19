const mongoose = require('mongoose');

// Database ka naam bhi specify karna zaroori hai (for example "inotebook")
const mongoURI = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to Mongo Successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // app ko band kar dega agar db connect na ho
  }
};

module.exports = connectToMongo;
 