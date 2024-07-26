// src/contexts/DataContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, [pageSize, currentPage]);

  const fetchUsers = async () => {
    setLoading(true);
    const response = await axios.get(`https://dummyjson.com/users?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
    setUsers(response.data.users);
    setLoading(false);
  };

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
    setProducts(response.data.products);
    setLoading(false);
  };

  return (
    <DataContext.Provider value={{ users, products, loading, setPageSize, setCurrentPage }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
