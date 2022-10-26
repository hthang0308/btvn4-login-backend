const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const SERVER_PORT = 3001;

// Create Express App and Routes
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/sign-up", (req, res) => {
	res.status(200).send({
		success: true,
		message: "User signed up successfully",
		data: req.body
	});
});


app.listen(SERVER_PORT, () => {
	console.log(`Server is running on port ${SERVER_PORT}`);
});