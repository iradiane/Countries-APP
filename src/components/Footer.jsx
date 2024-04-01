import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-between px-4 md:px-24 bg-gray-100 h-[100px] items-center'>
        <div className="flex items-center space-x-4"> 
          <img src='src/images/log.svg' className='w-16 h-16' alt='Logo' /> 
          <h1 className='text-blue-500 text-[24px] md:text-[35px] font-extrabold'>Logoipsum</h1> 
        </div>
        <p className='text-[14px] md:text-[16px] mt-4 md:mt-0'>Copyright © 2024. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
