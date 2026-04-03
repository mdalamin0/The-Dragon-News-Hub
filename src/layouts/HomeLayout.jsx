import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/Header/LatestNews';
import NavBar from '../components/Header/NavBar';
import LeftAside from '../components/Main/LeftAside';
import RightAside from '../components/Main/RightAside';

const HomeLayout = () => {
  return (
    <div className='my-container'>
      <header className='mt-12.5'>
        <Header />
        <section className='mt-7.5'>
          <LatestNews />
        </section>
        <nav>
          <NavBar />
        </nav>
      </header>
      <main className='grid grid-cols-12 gap-6 mt-20 mb-5'>
        <aside className='col-span-3 sticky top-2 h-fit'>
          <LeftAside />
        </aside>
        <section className="main col-span-6">
          <h2 className='text-xl font-semibold'>Dragon News Home</h2>
          <Outlet />
        </section>
        <aside className='col-span-3 sticky top-2 h-fit'>
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;