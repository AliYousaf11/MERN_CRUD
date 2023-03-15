const mongoose = require("mongoose");
const DB = process.env.DATABASE;

// db connection
mongoose
  .connect(DB)
  .then(() => console.log("connected database"))
  .catch((error) => console.log("error in database connection: " + error));
