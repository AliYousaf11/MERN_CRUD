const AddProducts = require("../../Model/AddProducts");

exports.delbyId = async (req, res) => {
  console.log("del start");
  try {
    const del = await AddProducts.deleteOne({
      _id: req.params.id,
    });
    return res.json({
      status: 200,
      data: del,
      message: "del Successfully Up..",
    });
  } catch (error) {
    console.log("delproduct" + error);
  }
};
