import React, { useState, useEffect } from 'react';
import ListingCard from '../components/ListingCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []); // This will run only once when the component mounts

  // Remove item from favorites when the user clicks the button
  const removeFromFavorites = (listingId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== listingId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); // Update localStorage immediately
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="favorites-container">
        {favorites.length > 0 ? (
          favorites.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              isFavorite={true}
              onToggleFavorite={() => removeFromFavorites(listing.id)}
              showFavoriteButton={false}
              showRemoveButton={true}
            />
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
