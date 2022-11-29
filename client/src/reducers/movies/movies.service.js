import apiConfig from "../../api/apiConfig";
import axios from "axios";

const getPopularMovies = async (page) => {
  const response = await axios.get(
    `${apiConfig.baseUrl}/movie/popular?page=${page}&api_key=${apiConfig.apiKey}`
  );
  return response.data.results;
};

const getMovieId = async (id) => {
  const response = await axios.get(
    `${apiConfig.baseUrl}/movie/${id}?api_key=${apiConfig.apiKey}`
  );
  return response.data;
};

const getSimilarMovies = async (id) => {
  const response = await axios.get(
    `${apiConfig.baseUrl}/movie/${id}/similar?api_key=${apiConfig.apiKey}`
  );
  return response.data.results;
};

export const MoviesService = {
  getPopularMovies,
  getMovieId,
  getSimilarMovies,
};
