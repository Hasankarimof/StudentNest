import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ListingCard from '../components/ListingCard';
import LocationFilter from '../components/LocationFilter';
import PriceRangeFilter from '../components/PriceRangeFilter';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  const mockData = [
    { id: 1, name: 'Cozy Studio', location: 'Downtown', price: 800 },
    { id: 2, name: '2 Bedroom Apartment', location: 'Suburbs', price: 1200 },
    { id: 3, name: 'Luxury Condo', location: 'City Center', price: 2500 },
  ];

  useEffect(() => {
    setListings(mockData);
    setFilteredResults(mockData);

    // Load favorites from localStorage when the component mounts
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []); // This will run only once when the component mounts

  useEffect(() => {
    // Save favorites to localStorage whenever favorites state changes
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (searchTerm) => {
    let results = listings.filter((listing) =>
      listing.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleLocationFilter = (location) => {
    setLocationFilter(location);
  };

  const handlePriceFilter = (range) => {
    setPriceFilter(range);
  };

  useEffect(() => {
    let results = listings;

    if (locationFilter) {
      results = results.filter((listing) => listing.location === locationFilter);
    }

    if (priceFilter) {
      results = results.filter((listing) => {
        const price = listing.price;
        if (priceFilter === '0-1000') return price >= 0 && price <= 1000;
        if (priceFilter === '1000-2000') return price > 1000 && price <= 2000;
        if (priceFilter === '2000+') return price > 2000;
        return true;
      });
    }

    setFilteredResults(results);
  }, [locationFilter, priceFilter, listings]);

  const addToFavorites = (listing) => {
    if (!favorites.some((fav) => fav.id === listing.id)) {
      const updatedFavorites = [...favorites, listing];
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <LocationFilter onFilterChange={handleLocationFilter} />
      <PriceRangeFilter onFilterChange={handlePriceFilter} />

      <div className="listings-container">
        {filteredResults.length > 0 ? (
          filteredResults.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              isFavorite={favorites.some((fav) => fav.id === listing.id)}
              onToggleFavorite={() => addToFavorites(listing)}
              showFavoriteButton={true}
            />
          ))
        ) : (
          <p>No apartments found</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
