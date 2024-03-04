import React from 'react';
import logo from "../images/vtubermainlogo.png"


const NavBar = () => {
  return (
    <div className=" bg-slate-600">
      <div className='flex justify-between mx-10'>
        <div>
          <img src={logo} alt="Logo" width={100} height={100} /> 
        </div>
        <div className='flex justify-between space-x-4 items-center text-xl font-medium'>
          <p>Home</p>
          <p>Profile</p>
          <p>About</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;