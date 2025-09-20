const mongoose = require("mongoose");
const { Schema } = mongoose;   // Schema import kiya

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,   // email unique hoga
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User =mongoose.model("user", UserSchema);
module.exports = User;
