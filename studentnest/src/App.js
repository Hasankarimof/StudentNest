import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotificationContainer from './components/NotificationContainer';
import { NotificationProvider } from './context/NotificationContext';
import { isAuthenticated } from './auth/Auth';
import LoadingSpinner from './components/LoadingSpinner'; // Create a loading spinner component

// Lazy loading for better performance
const Home = lazy(() => import('./pages/Home'));
const Listings = lazy(() => import('./pages/Listings'));
const Profile = lazy(() => import('./pages/Profile'));
const Registration = lazy(() => import('./pages/Registration'));
const Login = lazy(() => import('./pages/Login'));
const Favorites = lazy(() => import('./pages/Favorites'));
const Chat = lazy(() => import('./chat/Chat'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <NotificationProvider>
      <div>
        <Header />
        <NotificationContainer /> {/* Notification container for alerts */}
        <Suspense fallback={<LoadingSpinner />}> {/* Loading spinner while loading components */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favorites" element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            } />
            <Route path="/chat" element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin-dashboard" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </NotificationProvider>
  );
}

export default App;
