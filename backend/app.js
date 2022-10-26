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

app.post("/sign-up", (req, res) => {
	res.status(200).send({
		success: true,
		message: `Sign up successfully with username: ${req.body.username} and password: ${req.body.password}`,
		data: req.body
	});
});


app.listen(SERVER_PORT, () => {
	console.log(`Server is running on port ${SERVER_PORT}`);
});