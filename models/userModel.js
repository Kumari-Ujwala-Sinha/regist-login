const mongoose = require("mongoose");

const userSchema =new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
      unique: true
  },
    firstname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    avatar: {
      type: String,
      default:
        "https://www.w3schools.com/howto/img_avatar2.png",
    },
    gender: {
      type: String,
      default: "female",
    },
    mobile: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
