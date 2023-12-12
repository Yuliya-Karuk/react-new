import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route exact  path='/posts' element={<Posts />} />
      <Route path='/error' element={<Error />} />
      <Route exact path='/posts/:id' element={<PostIdPage />} />
      <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
  );
};

export default AppRouter;