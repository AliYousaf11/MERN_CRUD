const addProduct = require("../../Model/AddProducts");

exports.addProduct = async (req, res) => {
  const products = new addProduct(req.body);
  await products.save();
  return res.json({
    status: 200,
    message: "Your are Successfully Added Product...",
  });
};
