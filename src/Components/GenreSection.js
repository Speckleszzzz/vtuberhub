import React, { Component } from 'react';

export default class GenreSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownVisible: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      dropdownVisible: !prevState.dropdownVisible
    }));
  };

  render() {
    const { dropdownVisible } = this.state;

    return (
      <div>
        <div className='mx-40 flex justify-between'>
          <div className='font-bold mx-12 text-zinc-50'>
            <p className='text-5xl'>More Features</p>
            <p className='text-sm p-2'>Search for your preferences</p>
          </div>
          <div>
            <button onClick={this.handleClick} id="dropdownCheckboxButton" className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800" type="button">
              Filter options
              <svg className={`w-2.5 h-2.5 ms-3 ${dropdownVisible ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" style={{position: 'relative', right: '5px'}}>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div id="dropdownDefaultCheckbox" className={`z-10 ${dropdownVisible ? '' : 'hidden'} w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
              <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                <li>
                  <div className="flex items-center">
                    <input id="checkbox-item-1" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="checkbox-item-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input checked id="checkbox-item-2" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="checkbox-item-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <input id="checkbox-item-3" type="checkbox" value="" className="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 rounded focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                    <label htmlFor="checkbox-item-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kids</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
