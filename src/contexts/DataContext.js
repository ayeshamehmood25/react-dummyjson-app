// src/contexts/DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async (limit = 5, skip = 0) => {
    setLoading(true);
    const response = await axios.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
    setUsers(response.data.users);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(pageSize, (currentPage - 1) * pageSize);
  }, [pageSize, currentPage]);

  return (
    <DataContext.Provider value={{ users, loading, setPageSize, setCurrentPage, fetchUsers, currentPage, pageSize }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
