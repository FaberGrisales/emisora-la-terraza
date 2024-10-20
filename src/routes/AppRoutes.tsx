import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Emissions from '../views/Emissions';
import Gallery from '../views/Gallery';
import Videos from '../views/Videos';
import Are from '../views/Are';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/emission" element={<Emissions />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/ar" element={<Are />} />
    </Routes>
  );
};

export default AppRoutes;