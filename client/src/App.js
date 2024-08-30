import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DriversPage from './pages/Driverspage';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CreateDriverForm from './components/createDriver';
import CreateDriver from './components/createDriver';
import ProtectedRoute from './PrivateRoute';
import LoginPage from './pages/Login';
import PublicRoute from './PublicRoute';
const queryClient = new QueryClient();

function App() {
  const token = localStorage.getItem('authToken');

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<ProtectedRoute element={<Layout />} />}>
            <Route index element={<ProtectedRoute element={<HomePage />} />} />{' '}
            <Route
              path='drivers'
              element={<ProtectedRoute element={<DriversPage />} />}
            />
            <Route
              path='create'
              element={<ProtectedRoute element={<CreateDriver />} />}
            />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
