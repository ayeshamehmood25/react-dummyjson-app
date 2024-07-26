// src/components/Filter.js
import React from 'react';

const Filter = ({ onFilterChange, onPageSizeChange }) => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <select onChange={(e) => onPageSizeChange(e.target.value)}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => onFilterChange('firstName', e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => onFilterChange('email', e.target.value)}
      />
      <input
        type="text"
        placeholder="Birth Date"
        onChange={(e) => onFilterChange('birthDate', e.target.value)}
      />
      <input
        type="text"
        placeholder="Gender"
        onChange={(e) => onFilterChange('gender', e.target.value)}
      />
    </div>
  );
};

export default Filter;
