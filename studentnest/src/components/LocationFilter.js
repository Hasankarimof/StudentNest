import React, { useState } from 'react';

const LocationFilter = ({ onFilterChange }) => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    onFilterChange(location); // Pass the selected location to parent
  };

  return (
    <div>
      <label>Filter by Location:</label>
      <select value={selectedLocation} onChange={handleLocationChange}>
        <option value="">All Locations</option>
        <option value="Downtown">Downtown</option>
        <option value="Suburbs">Suburbs</option>
        <option value="City Center">City Center</option>
      </select>
    </div>
  );
};

export default LocationFilter;
