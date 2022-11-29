import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navbar-cont">
        <div className="navbar-home">
          <Link to="/" className="navbar-text">
            <FontAwesomeIcon icon={faVideo} className="icon" />
            Movies
          </Link>
        </div>
        <div className="navbar-items">
          <Link to="/" className="navbar-text">
            Home
          </Link>
          {/* {location.pathname === "/" ? (
            <input type="text" placeholder="Search movie" />
          ) : null} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
