import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { MoviesService } from "./movies.service";

export const fetchPopularMoviesData = createAsyncThunk(
  "movies/fetchPopularMoviesData",
  MoviesService.getPopularMovies
);

export const fetchMovieId = createAsyncThunk(
  "movie/fetchMovieId",
  async (id) => await MoviesService.getMovieId(id)
);

export const clearFetchMovieID = createAction("movie/clearFetchMovieID ");

export const fetchSimilarMovies = createAsyncThunk(
  "movie/fetchSimilarMovies",
  async (id) => await MoviesService.getSimilarMovies(id)
);

export const clearSimilarMovies = createAction("movie/clearSimilarMovies ");
