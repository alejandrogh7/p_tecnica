const express = require("express");
const MovieRouter = require("./movie.routes");

const router = express.Router();

router.use("/movies", MovieRouter);

module.exports = router;
