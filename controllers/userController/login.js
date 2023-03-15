const UserDetails = require("../../Model/UserSchema");
const jwt = require("jsonwebtoken");
const secret = "mysecret";

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      status: 422,
      message: "plz fill all fields",
    });
  }
  try {
    const userExit = await UserDetails.findOne({ email: email });
    if (userExit) {
      const isMatch = await userExit.comparePassword(password);

      if (isMatch) {
        const token = jwt.sign({ id: userExit._id }, secret);
        userExit.tokens = [{ token }];
        // await userExit.save();
        
        console.log("backend", token);
        res.cookie("jwt", token, { httpOnly: false });
        // console.log(res.cookie("token", token))

        return res.json({
          status: 400,
          message: `You are login Successfully..`,
        });
      } else if (!isMatch) {
        return res.json({
          status: 200,
          message: "Invalid username or password",
        });
      }
    }
  } catch (error) {
    return res.json({
      status: 400,
      message: `login error ${error}`,
    });
  }
};

// cookie
// res.cookies("alicookies", token, {
//   expires: new Date(Date.now() + 25892000000),
//   httpOnly: true,
// });
// res.cookies("alicookies", "hello");
