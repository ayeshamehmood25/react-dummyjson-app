// src/pages/ProductsPage.js
import React, { useContext, useState } from 'react';
import DataContext from '../contexts/DataContext';
import DataTable from '../components/DataTable';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Search from '../components/Search';

const ProductsPage = () => {
  const { products, loading, setPageSize, setCurrentPage } = useContext(DataContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    title: '',
    brand: '',
    category: ''
  });

  const handleFilterChange = (filter, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filter]: value }));
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
    setCurrentPage(1); // Reset to the first page whenever page size changes
  };

  const filteredProducts = products.filter(product =>
    Object.entries(filters).every(([key, value]) =>
      value ? String(product[key]).toLowerCase().includes(value.toLowerCase()) : true
    ) &&
    Object.values(product).some(val =>
      String(val).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Filter onFilterChange={handleFilterChange} onPageSizeChange={handlePageSizeChange} filters={[
          { name: 'title', placeholder: 'Title' },
          { name: 'brand', placeholder: 'Brand' },
          { name: 'category', placeholder: 'Category' }
        ]} />
        <Search onSearch={(query) => setSearchTerm(query)} />
      </div>
      {loading ? <p>Loading...</p> : <DataTable data={filteredProducts} columns={['title', 'brand', 'category', 'price', 'rating', 'stock']} />}
      <Pagination onPageChange={(page) => setCurrentPage(page)} />
    </div>
  );
};

export default ProductsPage;
