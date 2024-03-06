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
      <div className='text-xl font-bold mx-10'>
        <p>Trending rn</p>
      </div>

      <div className='relative flex items-center py-8'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={50} onClick={SlideLeft} />
        <div id="slider" className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth space-x-4 scrollbar-hide'>
          {data.map((items, index) => (
            <div key={index} className="inline-block relative">\
            <div className='w-[300px] h-[300px]'>
              <div > 
                <img className='object-fill inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' src={items.img} alt='/' />
              </div>
              
                <div className='bg-black bg-opacity-50 text-white p-4 '>
                  <p>{items.name}</p>
                  <p className="text-balance">{items.description}</p>
                  <p>{items.genre}</p>
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
