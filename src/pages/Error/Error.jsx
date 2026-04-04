import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className='my-container text-center flex flex-col justify-center items-center min-h-screen space-y-3'>
      <h2 className='font-bold text-4xl'>404!</h2>
      <h3 className='font-semibold text-2xl'>Oops, page not found!</h3>
      <p className='font-semibold text-accent'>Sorry, the page you are looking for might be removed, renamed, or is temporarily unavailable.</p>
      <Link to="/category/0" className='btn btn-secondary rounded-none'>Back to Home</Link>
    </div>
  );
};

export default Error;