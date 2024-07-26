// src/pages/UsersPage.js
import React, { useContext, useState, useEffect } from 'react';
import DataContext from '../contexts/DataContext';
import DataTable from '../components/DataTable';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

const UsersPage = () => {
  const { users, fetchUsers, loading, setPageSize, setCurrentPage, currentPage, pageSize } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    firstName: '',
    email: '',
    birthDate: '',
    gender: ''
  });

  useEffect(() => {
    fetchUsers(pageSize, (currentPage - 1) * pageSize);
  }, [pageSize, currentPage]);

  const handleFilterChange = (filter, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filter]: value }));
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(1); // Reset to the first page whenever page size changes
  };

  const filteredUsers = users.filter(user =>
    Object.entries(filters).every(([key, value]) =>
      value ? String(user[key]).toLowerCase().includes(value.toLowerCase()) : true
    ) &&
    Object.values(user).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Users</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Filter onFilterChange={handleFilterChange} onPageSizeChange={handlePageSizeChange} />
        <Search onSearch={(query) => setSearchTerm(query)} />
      </div>
      {loading ? <p>Loading...</p> : <DataTable data={filteredUsers} />}
      <Pagination onPageChange={(page) => setCurrentPage(page)} />
    </div>
  );
};

export default UsersPage;
