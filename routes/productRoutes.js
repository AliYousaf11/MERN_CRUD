const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productController/addproduct");
const {
  getallproduct,
} = require("../controllers/productController/getallproduct");
const { delbyId } = require("../controllers/productController/delbyId");
const { updatebyId } = require("../controllers/productController/updatebyId");
const {
  getproductAdmin,
} = require("../controllers/productController/getproductAdmin");
const { checkAuth } = require("../middleware/checkAuth");

// Apply middleware
router.post("/addproduct", checkAuth, addProduct);

// apply middleware
router.get("/getproductadmin", getproductAdmin);
router.get("/getproductuser", getallproduct);
router.delete("/getproduct/:id", delbyId);
router.put("/updateproduct/:id", updatebyId);

module.exports = router;
