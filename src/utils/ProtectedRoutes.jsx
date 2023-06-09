import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Routes, Route } from 'react-router-dom';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return <Route {...rest} element={isAuthenticated ? <Element /> : null} />;
};

export default ProtectedRoute;