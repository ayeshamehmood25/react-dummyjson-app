// src/pages/UsersPage.js
import React, { useContext, useState } from 'react';
import DataContext from '../contexts/DataContext';
import DataTable from '../components/DataTable';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

const UsersPage = () => {
  const { users, loading, setPageSize, setCurrentPage } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    firstName: '',
    email: '',
    birthDate: '',
    gender: ''
  });

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
        <Filter onFilterChange={handleFilterChange} onPageSizeChange={handlePageSizeChange} filters={[
          { name: 'firstName', placeholder: 'Name' },
          { name: 'email', placeholder: 'Email' },
          { name: 'birthDate', placeholder: 'Birth Date' },
          { name: 'gender', placeholder: 'Gender' }
        ]} />
        <Search onSearch={(query) => setSearchTerm(query)} />
      </div>
      {loading ? <p>Loading...</p> : <DataTable data={filteredUsers} columns={['firstName', 'lastName', 'maidenName', 'age', 'gender', 'email', 'username', 'bloodGroup', 'eyeColor']} />}
      <Pagination onPageChange={(page) => setCurrentPage(page)} />
    </div>
  );
};

export default UsersPage;
