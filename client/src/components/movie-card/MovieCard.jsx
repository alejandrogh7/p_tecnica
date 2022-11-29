import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./MovieCard.scss";

const MovieCard = ({ movie }) => {
  const [image, setImage] = useState("");
  const API = useApi();

  useEffect(() => {
    setImage(
      `https://image.tmdb.org/t/p/original/${movie.poster_path}?api_key=${API}`
    );
  }, []);

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <img className="movie-image" src={image} />
      </Link>
      <div className="movie-title-cont">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-rate">
          <span>{movie.vote_average}</span>
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
