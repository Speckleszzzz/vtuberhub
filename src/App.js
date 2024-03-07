import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import Welcome from './Components/Welcome';
import TrendingCreators from './Components/TrendingCreators';
import Genre from './Components/Genre';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <TrendingCreators></TrendingCreators>
      <Genre></Genre>
      <Footer></Footer>
    </div>
  );
}

export default App;
