// src/components/Pagination.js
import React from 'react';

const Pagination = ({ onPageChange }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div>
      {pages.map(page => (
        <button key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
