import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ResortCollectionPage from './pages/ResortCollectionPage';
import ResortDescPage from './pages/ResortDescPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/resorts/type/:type' element={<ResortCollectionPage />} />
        <Route path='/resorts/:id' element={<ResortDescPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
