const AddProducts = require("../../Model/AddProducts");

exports.updatebyId = async (req, res) => {
  try {
    const update = await AddProducts.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        $set: {
          _id: req.body.id,
          name: req.body.name,
          price: req.body.price,
          quantity: req.body.quantity,
        },
      }
    );
    return res.json({
      status: 200,
      data: update,
      message: "Update Successfully Up..",
    });
  } catch (error) {
    console.log("updatebyid: -> " + error);
  }
};
