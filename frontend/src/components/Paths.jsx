import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Results } from './Results';

export const Paths = () => (
  <div className="p-4">
    <Routes>
      <Route exact path="/" element={<Navigate from='/' to='/search' />} />
      <Route exact path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/advance" element={<Results />} />
    </Routes>
  </div>

);