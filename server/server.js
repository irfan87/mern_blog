const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

const app = express();

dotenv.config();

app.use(express.json());

mongoose
	.connect(process.env.MONGO_URL)
	.then(console.log("You mongoDB is running"))
	.catch((e) => console.error(e));

app.use("/api/auth", authRoute);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, (req, res) => {
	console.log(`Blog API is running on port ${PORT}`);
});
