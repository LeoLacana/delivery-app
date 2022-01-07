import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Navigate to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
