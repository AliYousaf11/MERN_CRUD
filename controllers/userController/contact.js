const UserDetails = require("../../Model/UserSchema");
const jwt = require("jsonwebtoken");

exports.contact = async (req, res) => {
  const { name, email, cell, message } = req.body;
  if (!email || !name || !message || !cell) {
    return res.json({
      status: 422,
      message: "plz fill all fields",
    });
  }
  try {
    const userExit = await UserDetails.findOne({ email: email });
    if (userExit) {
      if ((name == userExit.name) & (cell == userExit.phoneNumber)) {
        userExit.message = message;
        await userExit.save();

        return res.json({
          status: 400,
          message: `Thanks for Contact Us... ${email}}`,
        });
      } else {
        return res.json({
          status: 200,
          message: "You are Changing in contact form...",
        });
      }
    }
  } catch (error) {
    return res.json({
      status: 400,
      message: `Contact error ${error}`,
    });
  }
};
