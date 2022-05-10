const router = require("express").Router();
const bcrypt = require("bcrypt");

const User = require("../models/User");

// REGISTER NEW USER
router.post("/register", async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPassword,
		});

		const user = await newUser.save();

		res.status(200).json(user);
	} catch (e) {
		res.status(500).json(e);
	}
});

// LOGIN USER
router.post("/login", async (req, res) => {
	try {
		// get the current user's username
		const user = await User.findOne({ username: req.body.username });

		// verify current user's password
		const validated = await bcrypt.compare(req.body.password, user.password);
		// !user && res.status(400).json("Wrong credentials");

		// if username and  password is not valid
		if (!user || !validated) {
			return res.status(400).json("Wrong credentials");
		}

		const { password, ...data } = user._doc;

		// if everythong is valid, send 200
		return res.status(200).json(data);
	} catch (e) {
		res.status(500).json(e);
	}
});

module.exports = router;
