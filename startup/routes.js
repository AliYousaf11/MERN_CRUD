const userRoutes = require("../routes/userRoutes");
const productRoutes = require("../routes/productRoutes");

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

module.exports = (app) => {
  // middlewares
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());

  //routes
  app.use("/product", productRoutes);
  app.use("/user", userRoutes);
};
