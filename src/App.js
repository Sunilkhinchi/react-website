import React from 'react'
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';

import './App.scss';

const App = () => {

  // const theme = () => {
  //   colors : {
      
  //   }
  // }
  return (
    // <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // s
  ); 
};

export default App;