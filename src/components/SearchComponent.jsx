import React from 'react';

const SearchComponent = ({ searchTerm, setSearchTerm, category, setCategory, categories = [] }) => {
  return (
    <div className='search-bar'>
      <input type='text' placeholder='Search products or descriptions...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
};

export default SearchComponent;