const express = require("express");
const app = express();


// config
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

// server
const httpServer = require("http").createServer(app);

// db & user&auth Routes
require("./startup/db"); // connection with db
require("./startup/routes")(app);


// port
const PORT = process.env.PORT;

// sserver listen
app.listen(PORT, () => {
  console.log(`Server is runnig ${PORT}`);
});
