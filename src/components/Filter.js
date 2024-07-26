// src/components/Filter.js
import React from 'react';

const Filter = ({ onFilterChange, onPageSizeChange, filters }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <select onChange={(e) => onPageSizeChange(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      {filters.map(filter => (
        <input
          key={filter.name}
          type="text"
          placeholder={filter.placeholder}
          onChange={(e) => onFilterChange(filter.name, e.target.value)}
        />
      ))}
    </div>
  );
};

export default Filter;
