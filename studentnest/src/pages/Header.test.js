import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest DOM matchers
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

test('renders navigation links in Header', () => {
  // Render the Header component wrapped in BrowserRouter (since it uses React Router)
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  // Assert that specific navigation links are present
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Listings')).toBeInTheDocument();
  expect(getByText('Profile')).toBeInTheDocument();
  expect(getByText('Favorites')).toBeInTheDocument();
  expect(getByText('Dashboard')).toBeInTheDocument();
  expect(getByText('Admin Dashboard')).toBeInTheDocument();
});
