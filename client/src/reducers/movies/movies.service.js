import apiConfig from "../../api/apiConfig";
import axios from "axios";

const getPopularMovies = async (page) => {
  const response = await axios.get(`${apiConfig.baseUrl}?page=${page}`);
  return response.data.movies;
};

const getMovieId = async (id) => {
  const response = await axios.get(`${apiConfig.baseUrl}/${id}`);
  return response.data.movie;
};

const getSimilarMovies = async (id) => {
  const response = await axios.get(`${apiConfig.baseUrl}/similar/${id}`);
  return response.data.movies;
};

export const MoviesService = {
  getPopularMovies,
  getMovieId,
  getSimilarMovies,
};
