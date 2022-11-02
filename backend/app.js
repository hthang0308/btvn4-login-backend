const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const SERVER_PORT = 3001;

// Create Express App and Routes
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Welcome to 19120129 - Huỳnh Minh Thắng's Backend");
});

app.post("/login", (req, res) => {
	if (req.body.username === "admin" && req.body.password === "admin") {
		res.status(200).send({
			success: true,
			message: `Login successfully with username: ${req.body.username} and password: ${req.body.password}`,
			data: {
				username: req.body.username,
				password: req.body.password,
			},
		});
	} else {
		res.status(400).send({
			success: false,
			message: `Login failed`
		});
	}
});


app.listen(SERVER_PORT, () => {
	console.log(`Server is running on port ${SERVER_PORT}`);
});