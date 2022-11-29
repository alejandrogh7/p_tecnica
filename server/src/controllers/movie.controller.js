require("dotenv").config();
const { API_KEY, API_URL } = process.env;

const getMovies = async (req, res) => {
  let { page } = req.query;
  page = page ? page : 1;
  try {
    let movies = null;
    await fetch(`${API_URL}/movie/popular?page=${page}&api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => (movies = json.results));

    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getMovieID = async (req, res) => {
  const { id } = req.params;
  try {
    let movie = null;
    await fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => (movie = json));
    return res.status(200).json({ movie });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getMoviesSimilar = async (req, res) => {
  const { id } = req.params;
  try {
    let movies = null;
    await fetch(`${API_URL}/movie/${id}/similar?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((json) => (movies = json.results));
    return res.status(200).json({ movies });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

module.exports = {
  getMovies,
  getMovieID,
  getMoviesSimilar,
};
