import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import TrendingCreators from './Components/TrendingCreators';
import Upload from './pages/Upload';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import Genre from './Components/Genre';
import Footer from './Components/Footer'
import "./index.css"
import GenreSection from './Components/GenreSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
