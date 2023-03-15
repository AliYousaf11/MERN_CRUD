const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// user schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  confirmPassword: {
    type: String,
    require,
  },
  phoneNumber: {
    type: Number,
    require,
  },
  tokens: [
    {
      token: {
        type: String,
        require: true,
      },
    },
  ],
  message: {
    type: String,
    require,
  },
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserDetails = mongoose.model("UserDetails", UserSchema);
module.exports = UserDetails;
