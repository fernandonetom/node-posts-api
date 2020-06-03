const express = require("express");

//Routes
const router = express.Router();
router.get("/", (req, res) => {
	res.send("Hello World");
});

//Configs
const app = express();
app.use("/", router);

module.exports = app;
