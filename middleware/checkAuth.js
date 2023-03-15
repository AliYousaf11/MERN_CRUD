const UserDetails = require("../Model/UserSchema");
const jwt = require("jsonwebtoken");
const secretKey = "mySecretKey";
var cookies = require("cookie-parser");

exports.checkAuth = (req, res, next) => {
  // Get token from cookie
  console.log(`this is the cookies ${req.cookies.jwt}`)
  const token = req.cookies.token;
  console.log("cookies not get from the request ", token);

  if (!token) {
    return res.status(401).json({ message: "Authentication C failed" });
  }

  // Validate token
  jwt.verify(token, secretKey, (err) => {
    if (err) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    // Token is valid, allow access to protected route
    res.json({ message: "You have access to this protected route" });
  });
  next();
};
