const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000 || process.env.PORT;

// data
const data = require("./data");

//Middleware
app.use(express.json());
app.use(cors());

// ROUTES
app.get("/api/projects", (req, res) => {
	res.send(data.projects);
});

app.get("/api/project/:id", (req, res) => {
	const project = data.projects.find((proj) => proj.id === req.params.id);

	if (project) {
		res.send(project);
	} else {
		res.status(404).send({ message: "Product not found" });
	}
});

app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.listen(PORT, () => {
	console.log(`Server is running at port: ${PORT}`);
});
