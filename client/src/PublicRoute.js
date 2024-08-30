// PublicRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PublicRoute = ({ element, ...rest }) => {
  const token = localStorage.getItem('authToken');

  return <Route {...rest} element={token ? <Navigate to='/' /> : element} />;
};

export default PublicRoute;
