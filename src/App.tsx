import React from 'react';
import './App.css';
import Navbar  from './Components/Navbar'; // Fix: Import Navbar using named import
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import Ofertas from './Components/Ofertas';
import Novedades from './Components/Novedades';

function App() {
  return (
    
    <div>
      <div>
      <Navbar/>
      </div>
      <div>
        <div className='sticky'>
        <Slider/>
        </div>
        <Ofertas/>
        <Novedades/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
