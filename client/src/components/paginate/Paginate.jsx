import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Paginate.scss";

const Paginate = ({ changePage, currentPage }) => {
  const pages = [];

  const handlePrevious = () => {
    if (currentPage - 1 < 1) return;
    else changePage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage + 1 > 5) return;
    else changePage(currentPage + 1);
  };

  for (let i = 0; i < 5; i++) {
    pages.push(i + 1);
  }

  return (
    <div className="paginate-cont">
      <ul className="paginate-items">
        <li className="page-item" onClick={() => handlePrevious()}>
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </li>
        {pages &&
          pages.map((page) =>
            page === currentPage ? (
              <li key={page} className="page-item current-page">
                {page}
              </li>
            ) : (
              <li
                key={page}
                className="page-item"
                onClick={() => changePage(page)}
              >
                {page}
              </li>
            )
          )}
        <li className="page-item" onClick={() => handleNext()}>
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
