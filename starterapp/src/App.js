//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        {/* Other routes */}
      </Routes>
    </div>
  );
}

export default App;
