const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");

const app = express();

// For JSON parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
app.use("/", routesHandler);

const PORT = 4000; // backend routing port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
