import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { popularMoviesReducer } from "../reducers/movies/movies.reducer";

export const store = configureStore({
  reducer: {
    movies: popularMoviesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
