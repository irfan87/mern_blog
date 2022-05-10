const express = require("express");

const app = express();

const PORT = 5000 || process.env.PORT;

app.use("/", (req, res) => {
	// console.log("this is main URL");
	res.send("This is main URL");
});

app.listen(PORT, (req, res) => {
	console.log(`Blog API is running on port ${PORT}`);
});
