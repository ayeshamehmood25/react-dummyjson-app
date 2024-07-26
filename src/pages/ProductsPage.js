import React, { useContext, useState } from 'react';
import DataTable from '../components/DataTable';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';
import Search from '../components/Search';
import DataContext from '../contexts/DataContext';

const ProductsPage = () => {
  const { products, fetchProducts, loading } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchProducts(5, (page - 1) * 5);
  };

  return (
    <div>
      <h1>Products</h1>
      <Filter onFilterChange={(value) => { /* handle filter change */ }} />
      <Search onSearch={(query) => { /* handle search */ }} />
      {loading ? <p>Loading...</p> : <DataTable data={products} />}
      <Pagination onPageChange={handlePageChange} currentPage={currentPage} totalPages={10} />
    </div>
  );
};

export default ProductsPage;
