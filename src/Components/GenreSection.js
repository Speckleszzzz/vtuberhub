import React, { Component } from 'react';
import data from '../imagecontent'; 
import '../Styling/GenreSection.css';


export default class GenreSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false,
      selectedGenre: null,
      hoverIndex: null
    };
    this.dropdownRef = React.createRef();
  }

  handleClick = () => {
    this.setState(prevState => ({
      dropdownVisible: !prevState.dropdownVisible
    }));
  };

  handleGenreSelect = (genre) => {
    this.setState({
      selectedGenre: genre,
      dropdownVisible: false
    });
  };

  handleMouseEnter = (index) => {
    this.setState({ hoverIndex: index });
  };

  handleMouseLeave = () => {
    this.setState({ hoverIndex: null });
  };

  render() {
    const { dropdownVisible, selectedGenre, hoverIndex } = this.state;

    return (
      <div className='relative h-fit'>
        <div className='mx-40 flex justify-between items-center'>
          <div className='font-bold mx-12 text-zinc-50'>
            <p className='text-5xl'>More Features</p>
            <p className='text-sm p-2'>Search for your preferences</p>
            {!selectedGenre && <p>Choose your genre to search for the perfect match</p>}
          </div>
          <div className="relative">
            <button onClick={this.handleClick} id="dropdownCheckboxButton" className="w-48 text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
              Filter options
              <svg className={`w-2.5 h-2.5 ms-3 ${dropdownVisible ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" style={{position: 'relative', right: '5px'}}>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div ref={this.dropdownRef} id="dropdownDefaultCheckbox" className={`absolute top-full z-10 ${dropdownVisible ? '' : 'hidden'} w-48 bg-gray-700 divide-y divide-gray-400 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 dark:divide-gray-600`}>
              <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                <li onClick={() => this.handleGenreSelect('Anime')}>
                  <div className="flex items-center">
                    <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-400 border-gray-400 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="checkbox-item-1" className="ms-2 text-sm font-medium text-white dark:text-gray-300">Anime</label>
                  </div>
                </li>
                <li onClick={() => this.handleGenreSelect('Fantasy')}>
                  <div className="flex items-center">
                    <input id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-400 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="checkbox-item-2" className="ms-2 text-sm font-medium text-white dark:text-gray-300">Fantasy</label>
                  </div>
                </li>
                <li onClick={() => this.handleGenreSelect('Cartoon')}>
                  <div className="flex items-center">
                    <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="checkbox-item-3" className="ms-2 text-sm font-medium text-white dark:text-gray-300">Cartoon</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mx-44 my-8 h-[100%]">
        {data
          .filter(item => item.genre === selectedGenre)
          .map((item, index) => (
            <div 
              key={item.id} 
              className="flex flex-col items-center relative"
              onMouseEnter={() => this.handleMouseEnter(index)}
              onMouseLeave={this.handleMouseLeave}
            >
              <div 
                className="relative w-full h-fit cursor-pointer"
                style={{ transition: 'transform 0.5s' }}
              >
                <div className={`flipper ${hoverIndex === index ? 'flipped' : ''}`}>
                  <div className="front">
                    <img src={item.img} alt={item.name} className="w-full h-fit" />
                  </div>
                  <div className="back absolute top-0">
                    <div className="w-full h-full p-4 text-white bg-gray-800 bg-opacity-80 text-center flex justify-center">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


