// src/components/Pagination.js
import React from "react";

const Pagination = ({ onPrevClick, onNextClick, hasPrev, hasNext }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevClick} disabled={!hasPrev}>
        Previous
      </button>
      <button onClick={onNextClick} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
