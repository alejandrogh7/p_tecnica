import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import useApi from "../../hooks/useApi";
import {
  clearFetchMovieID,
  clearSimilarMovies,
  fetchMovieId,
  fetchSimilarMovies,
} from "../../reducers/movies/movies.actions";
import {
  selectMovieId,
  selectSimilarMovies,
} from "../../reducers/movies/movies.selectors";
import "./DetailsMovies.scss";

const DetailsMovies = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const API = useApi();

  const movie = useSelector(selectMovieId);

  const similarMovies = useSelector(selectSimilarMovies);

  useEffect(() => {
    dispatch(fetchMovieId(id));
    dispatch(fetchSimilarMovies(id));
  }, []);

  useEffect(() => {
    dispatch(fetchMovieId(id));
    dispatch(fetchSimilarMovies(id));
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      dispatch(clearFetchMovieID());
      dispatch(clearSimilarMovies());
    };
  }, []);

  if (movie && similarMovies.length > 0) {
    return (
      <div className="detail-cont">
        <div className="detail-left">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}?api_key=${API}`}
            className="detail-image"
          />
          <span className="detail-date">{movie.release_date}</span>
          <div className="detail-similar">
            {similarMovies.length > 0 &&
              similarMovies.map((movie, index) => {
                console.log(index);
                if (index > 3) {
                  return;
                } else {
                  return (
                    <Link
                      to={`/movie/${movie.id}`}
                      key={movie.id}
                      className="similar-movie"
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}?api_key=${API}`}
                        className="similar-image"
                      />
                    </Link>
                  );
                }
              })}
          </div>
        </div>
        <div className="detail-right">
          <h1 className="detail-title">{movie.title}</h1>
          <div className="detail-genres">
            {movie.genres &&
              movie.genres.map((genre) => {
                return <span key={genre.id}>{genre.name}</span>;
              })}
          </div>
          <div className="detail-description">{movie.overview}</div>
          <div className="detail-company">
            {movie.production_companies &&
              movie.production_companies.map((company) => {
                return (
                  <div key={company.id} className="company">
                    <img
                      src={
                        company.logo_path
                          ? `https://image.tmdb.org/t/p/original/${company.logo_path}?api_key=${API}`
                          : ""
                      }
                      className="company-image"
                    />
                    <span>{company.name}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  } else return <div>fetching</div>;
};

export default DetailsMovies;
