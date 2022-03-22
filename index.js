const express = require("express");

const app = express();

const PORT = 4000; // backend routing port
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
