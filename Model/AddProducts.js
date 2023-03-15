const mongoose = require("mongoose");

// AddProducts
const Products = mongoose.Schema({
  name: {
    type: String,
    require,
  },
  price: {
    type: Number,
    require,
  },
  quantity: {
    type: Number,
    require,
  },
});
const AddProducts = mongoose.model("AddProducts", Products);
module.exports = AddProducts;

// tokens: [
//   {
//     token: {
//       type: String,
//       require: true,
//     },
//   },
// ],