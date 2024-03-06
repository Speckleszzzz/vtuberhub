import React from 'react';
import data from '../imagecontent';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SlideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;
};

const SlideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;
};

const TrendingCreators = () => {
  return (
    <div className='mx-40 py-10'>
      <div className='font-bold mx-12'>
        <p className=' text-5xl'>Trending rn</p>
        <p className='text-sm p-2'>Check out the recent trending for you rn</p>
      </div>

      <div className='relative flex items-center py-8'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={50} onClick={SlideLeft} />
        <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth space-x-4 scrollbar-hide overflow-clip'>
          {data.map((items, index) => (
            <div key={index} className="inline-block relative ">
              <div className='bg-yellow-50'>
                <div className='cursor-pointer hover:scale-105 ease-in-out duration-300'>
                  <div > 
                    <img className='w-[500px] h-[400px] object-contain inline-block p-2' src={items.img} alt='/' />
                  </div>
                  <div className='bg-opacity-50 mx-5 p-3'>
                    <p>By : {items.name}</p>
                  </div>
                </div>
              </div>
            </div>   
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={50} onClick={SlideRight} />
      </div>
    </div>
  );
}

export default TrendingCreators;
