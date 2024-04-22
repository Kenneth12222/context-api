import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ShoppingStore from './components/ShoppingStore';
import './App.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ShoppingStore />} />
          <Route path='/men' element={<ShoppingStore category='men' />} />
          <Route path='/women' element={<ShoppingStore category='women' />} />
          <Route path='/jewelry' element={<ShoppingStore category='jewelry' />} />
          <Route path='/electronics' element={<ShoppingStore category='electronics' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
