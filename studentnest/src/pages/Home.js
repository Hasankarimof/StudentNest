// src/HomePage.js
import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal'; // Custom hook for scroll reveal
import '../HomePage.css'; // Using the existing CSS file

const HomePage = () => {
  useScrollReveal(); // Apply scroll reveal effect

  return (
    <div className="homepage">
      <main className="hero">
        <div className="hero-text">
          <h1>A Better Way to Stay</h1>
          <p>
            Inspiring, award-winning design meets modern, mobile-first service. Welcome to the future of hospitality.
          </p>
          <p className="location">Sonder Business Bay | Dubai</p>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Select a city" className="search-input" />
          <input type="date" placeholder="Check-in" className="date-input" />
          <input type="date" placeholder="Check-out" className="date-input" />
          <input type="number" placeholder="Guests" className="guest-input" min="1" />
          <button className="search-btn">Search</button>
        </div>
      </main>

      {/* Additional Sections */}
      <section className="section">
        <h2>Comfort and Convenience</h2>
        <p>Experience the comfort of our modern rooms and excellent service.</p>
      </section>
      <section className="section">
        <h2>Explore the City</h2>
        <p>Discover local attractions, restaurants, and hidden gems with ease.</p>
      </section>
      <section className="section">
        <h2>Our Promise</h2>
        <p>Customer satisfaction is at the heart of everything we do. Welcome to a new level of hospitality.</p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} StudentNest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
