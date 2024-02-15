import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home.jsx'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
