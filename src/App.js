import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Trips from './components/trips';
import Discover from './components/Discover';
import Signin from './components/signin'; 
import Reviews from "./components/reviews";
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Router> 
        <Navbar />
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/signin" element={<Signin />} /> 
        </Routes>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
