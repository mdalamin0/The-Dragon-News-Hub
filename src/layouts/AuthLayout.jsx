import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/Header/NavBar';

const AuthLayout = () => {
  return (
   <div className='bg-base-200'>
     <div className='my-container '>
      <NavBar/>
      <Outlet/>
    </div>
   </div>
  );
};

export default AuthLayout;