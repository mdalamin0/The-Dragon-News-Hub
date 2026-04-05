import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
import { Link } from 'react-router';

const NoDataFoundPage = ({emptyStatetitle, description, showBtn = true}) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-center space-y-3'>
      <div className='w-full text-7xl md:text-9xl'>⏳</div>
      <h2 className='text-xl md:text-4xl font-bold'>{emptyStatetitle}</h2>
      {description && <p className='text-accent dark:text-gray-400'>{description}</p>}
      {showBtn && <Link to="/category/0" className='btn md:btn-lg btn-secondary rounded-none hover:scale-105 transition-all duration-400'>Read News</Link>}
    </div>
  );
};

export default NoDataFoundPage;