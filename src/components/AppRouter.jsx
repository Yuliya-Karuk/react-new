import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';
import { routes } from '../router';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route =>
        <Route exact={route.exact} path={route.path} element={route.component} />
      )}
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  );
};

export default AppRouter;