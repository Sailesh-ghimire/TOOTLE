import React, { useEffect, useState } from 'react';
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
import CreateDriver from './components/createDriver';
import ProtectedRoute from './PrivateRoute';
import LoginPage from './pages/Login';
import PublicRoute from './PublicRoute';
import RegisterPage from './pages/RegisterPage';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path='drivers'
              element={
                <ProtectedRoute>
                  <DriversPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='create'
              element={
                <ProtectedRoute>
                  <CreateDriver />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route
            path='/login'
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path='/register'
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}
export default App;
