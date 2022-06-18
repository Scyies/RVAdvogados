import React from 'react';
import Home from './pages/home/Home';
import './scss/main.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
        <Header />
          <Home />
        <Footer />
    </div>
  )
}

export default App
