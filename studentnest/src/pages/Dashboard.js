import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotificationContext } from '../context/NotificationContext';

const Dashboard = () => {
  const { addNotification } = useContext(NotificationContext);
  const [notificationSent, setNotificationSent] = useState(false); // Add state to track if notification is sent

  useEffect(() => {
    // Only add a notification if it hasn't been sent yet
    if (!notificationSent) {
      addNotification('New listing available in your area!', 'success');
      setNotificationSent(true); // Set state to true so that this effect won't run again
    }
  }, [addNotification, notificationSent]);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Dashboard Content Here</p>
      <Link to="/"><button>Go Back Home</button></Link> {/* Add a button to navigate back */}
    </div>
  );
};

export default Dashboard;
