import React from 'react';
import { Link } from 'react-router-dom';
import '../Home.css'; // Import your CSS file for styles

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>StudentNest</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/listings">Listings</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <section className="hero">
        <h2>Start navigating your apartment search.</h2>
        <p>Unlock the power of StudentNest – your all-in-one platform for finding student accommodations.</p>
        <div className="cta-buttons">
          <Link className="btn primary" to="/listings">Browse Listings</Link>
          <Link className="btn secondary" to="/post-listing">Post Your Listing</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Set Personalized Searches</h3>
          <p>Track your preferences and easily find what you need.</p>
        </div>
        <div className="feature">
          <h3>Dashboard for Students</h3>
          <p>Manage your listings and saved properties in one place.</p>
        </div>
        <div className="feature">
          <h3>Community Interaction</h3>
          <p>Connect with other students and share your experiences.</p>
        </div>
      </section>

      <section className="testimonials">
        <h2>What Students Are Saying</h2>
        <div className="testimonial">"I found my perfect apartment through StudentNest!" - User A</div>
        <div className="testimonial">"The filters made searching so easy." - User B</div>
        <div className="testimonial">"Great experience! Highly recommend." - User C</div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 StudentNest. All rights reserved.</p>
        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
