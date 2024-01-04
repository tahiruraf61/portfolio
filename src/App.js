import React from 'react';
import {Routes, Route,} from 'react-router-dom'
import './App.css';
import Header from './Header';
import About from './About'
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Sidebar from './Sidebar';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
  <Routes>
     < Route path="/" element={<About /> } />
     <Route path="/services" element={<Services />} />
     <Route path="/portfolio" element={<Portfolio />} />
     <Route path="contact" element={<Contact />} />
  </Routes>
  <Footer />
    </div>
  );
}

export default App;
