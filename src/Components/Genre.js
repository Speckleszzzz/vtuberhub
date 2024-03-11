import React, { useState } from 'react';
import data from '../imagecontent';

const Genre = () => {
  const [SelectedGenre, setSelectedGenre] = useState(null);
  const [SelectedCategory, setSelectedCategory] = useState(null);

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setSelectedCategory(null);
  }

  
  const handleCategoryClick = (category) => {
    setSelectedGenre(null);
    setSelectedCategory(category);
  }

  const filteredData = data.filter(item => {
    return (!SelectedGenre || item.genre === SelectedGenre) && (!SelectedCategory || item.Category === SelectedCategory);
  });

  return (
    <div>

      <div className='flex justify-center'>
        <p className=' p-4 font-bold text-xl text-zinc-50'>Genre</p>
      </div>

      <div className='flex justify-center space-x-2'>
        <button onClick={() => handleGenreClick('Cartoon')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Cartoon</button>
        <button onClick={() => handleGenreClick('3D')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>3D</button>
        <button onClick={() => handleGenreClick('Anime')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Anime</button>
        <button onClick={() => handleGenreClick('Fantasy')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Fantasy</button>
        <button onClick={() => handleGenreClick('Realistic')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Realistic</button>
      </div>
      <div className='flex justify-center space-x-2 p-3'>
        <button onClick={() => handleCategoryClick('Male')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Male</button>
        <button onClick={() => handleCategoryClick('Female')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Female</button>
        <button onClick={() => handleCategoryClick('Kids')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Kids</button>
        <button onClick={() => handleCategoryClick('Others')} className='rounded-full bg-purple-500 font-bold hover:bg-purple-700 p-5 border-purple-100 border-4 w-36'>Others</button>
      </div>

      <div className='relative flex items-center py-8 mx-32 flex-wrap'>
      {filteredData.map((items, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-8 p-2">
          <div className='bg-yellow-50 p-2'>
            <div className='cursor-pointer hover:scale-105 ease-in-out duration-300'>
              <div className=''> 
                <img className=' w-[500px] h-[200px] object-contain inline-block p-1' src={items.img} alt='/' />
              </div>
              <div className='bg-opacity-50 mx-5 p-3'>
                <p>By : {items.name}</p>  
              </div>
            </div>
          </div>
        </div> 
        ))} 
      </div>
    </div>
      

   
  );
}

export default Genre;