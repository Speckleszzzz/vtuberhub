import React from 'react';
import data from '../imagecontent';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SlideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 1300;
};

const SlideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 1300;
};

const TrendingCreators = () => {
  return (
    <div className='mx-40 py-10'>
      <div className='font-bold mx-12 text-zinc-50'>
        <p className=' text-5xl'>Trending rn</p>
        <p className='text-sm p-2'>Check out the recent trending for you rn</p>
      </div>

      <div className='relative flex items-center py-8'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 fill-white' size={50} onClick={SlideLeft} />
        <div id="slider" className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth space-x-5 scrollbar-hide overflow-clip'>
          {data.map((items, index) => (
            <div key={index} className="inline-block relative w-[250px] h-[550px] ">
              <div className= ' bg-black border-slate-300 border-2 p-1'>
                <div>
                  <div > 
                    <img className='object-contain inline-block cursor-pointer hover:scale-105 ease-in-out duration-300 px-2 py-3' src={items.img} alt='/' />
                  </div>
                  <div className='bg-opacity-50 mx-5 p-3 text-white'>
                    <p>By : {items.name}</p>
                  </div>
                </div>
              </div>
            </div>   
          ))}
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 fill-white' size={50} onClick={SlideRight} />
      </div>
    </div>
  );
}

export default TrendingCreators;
