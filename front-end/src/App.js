import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
