const AddProducts = require("../../Model/AddProducts");

exports.getproductAdmin = async (req, res) => {
  try {
    const pageContent = 2;
    const UserpageNumber = parseInt(req.query.page);
    const CountDocument = await AddProducts.countDocuments();
    const TotalPages = Math.ceil(CountDocument / pageContent);

    // pagination rule's limit & skip
    const product = await AddProducts.find()
      .limit(pageContent)
      .skip(pageContent * UserpageNumber);

    return res.json({
      status: 200,
      data: product,
      TotalPages,
      message: `Your are Successfully Get Products...`,
    });
  } catch (error) {
    console.log("Your are not successfully get product..." + error);
  }
};
