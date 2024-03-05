import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import Welcome from './Components/Welcome';
import TrendingCreators from './Components/TrendingCreators';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Welcome></Welcome>
      <TrendingCreators></TrendingCreators>
    </div>
  );
}

export default App;
