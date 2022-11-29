import { createReducer } from "@reduxjs/toolkit";
import {
  fetchPopularMoviesData,
  fetchMovieId,
  clearFetchMovieID,
  fetchSimilarMovies,
  clearSimilarMovies,
} from "./movies.actions";

const initialState = {
  popularMovies: [],
  movie: null,
  similarMovies: [],
};

export const popularMoviesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchPopularMoviesData.pending, (state) => ({
    ...state,
    popularMovies: [],
  }));
  builder.addCase(fetchPopularMoviesData.rejected, (state) => ({
    ...state,
    popularMovies: [],
  }));
  builder.addCase(fetchPopularMoviesData.fulfilled, (state, action) => ({
    ...state,
    popularMovies: action.payload,
  }));

  builder.addCase(fetchMovieId.pending, (state) => ({
    ...state,
    movie: null,
  }));
  builder.addCase(fetchMovieId.rejected, (state) => ({
    ...state,
    movie: null,
  }));
  builder.addCase(fetchMovieId.fulfilled, (state, action) => ({
    ...state,
    movie: action.payload,
  }));

  builder.addCase(clearFetchMovieID, (state) => ({
    ...state,
    movie: null,
  }));

  builder.addCase(fetchSimilarMovies.pending, (state) => ({
    ...state,
    similarMovies: [],
  }));
  builder.addCase(fetchSimilarMovies.rejected, (state) => ({
    ...state,
    similarMovies: [],
  }));
  builder.addCase(fetchSimilarMovies.fulfilled, (state, action) => ({
    ...state,
    similarMovies: action.payload,
  }));

  builder.addCase(clearSimilarMovies, (state) => ({
    ...state,
    similarMovies: [],
  }));
});
