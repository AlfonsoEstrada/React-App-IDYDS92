import React from 'react';
import './App.css';
import Navbar  from './Components/Navbar'; // Fix: Import Navbar using named import
import Footer from './Components/Footer';
import Slider from './Components/Slider';

function App() {
  return (
    
    <div className='bg-nav-color'>
      <Navbar/>
      <div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
