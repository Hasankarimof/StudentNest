import React, { useState } from 'react';

const AdminDashboard = () => {
  // Mock state for listings (eventually, this will come from the backend)
  const [listings, setListings] = useState([
    { id: 1, name: 'Cozy Studio', location: 'Downtown', price: 800 },
    { id: 2, name: 'Luxury Condo', location: 'City Center', price: 2500 },
  ]);

  // Function to handle deletion of a listing
  const handleDelete = (id) => {
    setListings((prevListings) => prevListings.filter((listing) => listing.id !== id));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Manage your listings here.</p>
      <ul>
        {listings.map((listing) => (
          <li key={listing.id}>
            {listing.name} - {listing.location} - ${listing.price}
            <button onClick={() => handleDelete(listing.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
