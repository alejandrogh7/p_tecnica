import React, { useRef } from "react";
import { fetchPopularMoviesData } from "../../reducers/movies/movies.actions";
import { useSelector } from "react-redux";
import { selectPopularMovies } from "../../reducers/movies/movies.selectors";
import { useAppDispatch } from "../../app/hooks";
import { useEffect } from "react";
import MovieCard from "../movie-card/MovieCard";
import "./MoviesList.scss";
import { useState } from "react";
import Paginate from "../paginate/Paginate";

const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  const popularMovies = useSelector(selectPopularMovies);

  useEffect(() => {
    dispatch(fetchPopularMoviesData(currentPage));
  }, []);

  useEffect(() => {
    dispatch(fetchPopularMoviesData(currentPage));
  }, [currentPage]);

  return (
    <>
      <div className="pagination">
        <Paginate changePage={setCurrentPage} currentPage={currentPage} />
      </div>
      <div className="movies-list">
        {popularMovies.length > 0 &&
          popularMovies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </div>
    </>
  );
};

export default MoviesList;
