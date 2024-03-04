import React from 'react';
import welcomewallpaper from "../images/welcomewallpaper.jpg";


const Welcome = () => {
  return (
    <div className="bg-[url("../images/welcomewallpaper.jpg")]">
        <div className='text-center'>
            <p className='text-3xl'>Welcome to</p>
            <p className='text-5xl'>Vtuber Hub</p>
            <p>Where Aspiring Vtubers Meet Creators - Your Gateway to Virtual Stardom!</p>
        </div>
    </div>
  );
}

export default Welcome; 