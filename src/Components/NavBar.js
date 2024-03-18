import React from 'react';
import logo from "../images/vtubermainlogo.png"
import welcomewallpaper from "../images/welcomewallpaper.jpg";


const NavBar = () => {
  return (
    <div style={{ backgroundImage: `url(${welcomewallpaper})` }} className='bg-cover bg-center h-screen h-vh[80]'>
        <div className='flex justify-between px-5 h-vh[10] items-center bg-black opacity-80'>
          <div>
            <img src={logo} alt="Logo" width={90} height={90} /> 
          </div>
          <div className='flex justify-between space-x-4 items-center text-xl font-medium text-white'>
            <p>Home</p>
            <p>Trending</p>
            <p>Genre</p>
            <p>About</p>
            <p>
                <a href='/upload' className='p-2 rounded-full bg-white text-black' >
                  sample
                </a>
            </p>
          </div>
        </div>
        <div>
          <div className='text-center text-white absolute left-36 py-80'>
              <p className='text-3xl'>Welcome to</p>
              <p className='text-5xl'>Vtuber Hub</p>
              <p className=''>Where Aspiring Vtubers Meet Creators - Your Gateway to Virtual Stardom!</p>
              <button className="w-48 text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Upload Content</button>
              <br></br>
              
          </div>
        </div>
    </div>
  );
}

export default NavBar;