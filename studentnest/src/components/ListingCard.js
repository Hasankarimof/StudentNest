import React from 'react';

const ListingCard = ({ listing, isFavorite, onToggleFavorite, showFavoriteButton = true, showRemoveButton = false }) => {
  return (
    <div className="listing-card">
      <h2>{listing.name}</h2>
      <p>Location: {listing.location}</p>
      <p>Price: {listing.price}</p>
      {showFavoriteButton && (
        <button onClick={onToggleFavorite}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      )}
      {showRemoveButton && (
        <button onClick={onToggleFavorite}>
          Remove from Favorites
        </button>
      )}
    </div>
  );
};

export default ListingCard;
