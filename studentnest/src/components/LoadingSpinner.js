import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Spinner animation="border" variant="primary" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
