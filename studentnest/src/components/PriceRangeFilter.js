import React, { useState } from 'react';

const PriceRangeFilter = ({ onFilterChange }) => {
  const [selectedRange, setSelectedRange] = useState('');

  const handlePriceChange = (e) => {
    const range = e.target.value;
    setSelectedRange(range);
    onFilterChange(range); // Pass the selected price range to parent
  };

  return (
    <div>
      <label>Filter by Price:</label>
      <select value={selectedRange} onChange={handlePriceChange}>
        <option value="">All Prices</option>
        <option value="0-1000">$0 - $1000</option>
        <option value="1000-2000">$1000 - $2000</option>
        <option value="2000+">$2000+</option>
      </select>
    </div>
  );
};

export default PriceRangeFilter;
