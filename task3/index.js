const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const port = process.env.PORT || 8080;
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use("/users", userRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
