import React, { useRef } from 'react';
import { SocialIcon } from 'react-social-icons'


const Footer = () => {

    const ref = useRef(null);
    const handleHomeClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

  return (
    <div className=' bg-slate-600'>
        <div className='space-x-4 flex justify-center p-4'>
            <SocialIcon network="github" url="https://github.com/Speckleszzzz" />
            <SocialIcon network="instagram" url="https://github.com/Speckleszzzz" />
            <SocialIcon network="discord" url="https://github.com/Speckleszzzz" />
            <SocialIcon network="twitter" url="https://github.com/Speckleszzzz" />
            <SocialIcon url="https://www.example.com" label="Our portfolio" />
        </div>
        <div className='space-x-4 flex justify-center '>
            <p onClick={handleHomeClick}>Home</p>
            <p>Contact</p>
        </div>
        <div className='flex justify-center p-1 space-x-2'>
            <p className='font-bold'>Copyright@2024:</p>
            <p>Designed by</p>
            <p className=' font-bold'>Speckles</p>
        </div>
    </div>
  );
}

export default Footer;
