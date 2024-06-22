import React from "react";
import "../../src/App.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const maxPagesToShow = 5;
  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(maxPagesToShow / 2), nPages - maxPagesToShow + 1)
  );
  const endPage = Math.min(nPages, startPage + maxPagesToShow - 1);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li>
          <a className="page-link" onClick={goToPrevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            style={{ margin: "20px" }}
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              style={{ textDecoration: "none" }}
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
