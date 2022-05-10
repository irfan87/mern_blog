const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log("You mongoDB is running"))
	.catch((e) => console.error(e));

const PORT = 5000 || process.env.PORT;

app.listen(PORT, (req, res) => {
	console.log(`Blog API is running on port ${PORT}`);
});
