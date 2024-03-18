import React from 'react'
import NavBar from '../Components/NavBar'
import TrendingCreators from '../Components/TrendingCreators'
import GenreSection from '../Components/GenreSection'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className=' bg-[#111111]' >
        <NavBar></NavBar>
        <TrendingCreators></TrendingCreators>
        <GenreSection></GenreSection>
        <Footer></Footer>
      </div>
  )
}

export default Home