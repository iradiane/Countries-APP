import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div>
      <div className='w-full bg-[url(src/images/head_background.jpeg)] bg-no-repeat bg-cover h-[400px]'>
        <NavBar />
        <div className='text-white text-center px-4 md:px-0'>
          <h1 className='font-bold text-3xl md:text-5xl'>Country API App</h1>
          <p className='text-lg md:text-xl px-4 md:px-0 py-4'>This is a simple app that allows you to search for countries and continents using the API.</p>
          <input placeholder='Search country by name' className='bg-white h-12 w-full md:w-[50%] lg:w-[42%] mx-auto mb-8 px-4' />
        </div>
      </div>
    </div>
  );
};

export default Header;
