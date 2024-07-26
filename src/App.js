// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';
import UsersPage from './pages/UsersPage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
