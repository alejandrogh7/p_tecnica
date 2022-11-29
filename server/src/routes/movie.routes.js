const express = require("express");
const {
  getMovies,
  getMovieID,
  getMoviesSimilar,
} = require("../controllers/movie.controller");

const router = express.Router();


router.get("/:id", getMovieID);
/**
 * @swagger
 * /api/movies:
 *  get:
 *    summary: List of all Movies
 *    tags: [Movies]
 *    responses:
 *      200:
 *        description: List all Movies
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                object
 */
router.get("/", getMovies);

router.get("/similar/:id", getMoviesSimilar);

module.exports = router;
