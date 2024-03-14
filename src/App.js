import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import TrendingCreators from './Components/TrendingCreators';
//import Genre from './Components/Genre';
import Footer from './Components/Footer'
import "./index.css"
import GenreSection from './Components/GenreSection';

function App() {
  return (
    <div className=' bg-[#111111]' >
      <NavBar></NavBar>
      <TrendingCreators></TrendingCreators>
      <GenreSection></GenreSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
