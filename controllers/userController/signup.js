const UserDetails = require("../../Model/UserSchema");
const bcrypt = require("bcrypt");

exports.signup = async (req, res, next) => {
  let { name, email, password, confirmPassword, phoneNumber } = req.body;
  if (!name || !email || !password || !confirmPassword || !phoneNumber) {
    return res.json({
      status: 422,
      data: {},
      message: "plz fill all fields..",
    });
  }
  try {
    const userExit = await UserDetails.findOne({ email: email });
    if (userExit) {
      return res.status(400).send({
        message: `This ${userExit.email} Already Allocated Try Another Email`,
      });
    } else if (password !== confirmPassword) {
      return res.json({
        status: 422,
        message: `Your Password: ${password} doesn't match Confirm-Password: ${confirmPassword}`,
      });
    }

    const saltRound = 10;
    const hashpassword = await bcrypt.hash(password, saltRound);
    const hashconfirmPassword = await bcrypt.hash(confirmPassword, saltRound);
    const user = new UserDetails({
      name: name,
      email: email,
      password: hashpassword,
      confirmPassword: hashconfirmPassword,
      phoneNumber: phoneNumber,
    });

    await user.save();
    return res.json({
      status: 200,
      data: user,
      message: "Your are Successfully Signed Up..",
    });
  } catch (error) {
    return res.json({
      status: 400,
      message: `something went wrong ${error}`,
    });
  }
  next();
};
