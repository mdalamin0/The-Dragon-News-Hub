import React, { useRef } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/Header/LatestNews';
import NavBar from '../components/Header/NavBar';
import LeftAside from '../components/Main/LeftAside';
import RightAside from '../components/Main/RightAside';
import Loading from '../components/Loader/Loading';
import { GiHamburgerMenu } from "react-icons/gi";
import Footer from '../components/Footer/Footer';


const HomeLayout = () => {
  const { state } = useNavigation();
  const drawerRef = useRef();
  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  }

  return (
    <div className="drawer lg:drawer-open my-container">

      {/* Toggle input */}
      <input id="drawer-toggle" type="checkbox" ref={drawerRef} className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content">

        {/* Header */}
        <header className='mt-12.5'>
          <Header />
          <section className='mt-7.5'>
            <LatestNews />
          </section>
          <nav>
            <NavBar />
          </nav>
        </header>

        {/* Main Layout */}
        <main className='grid grid-cols-1 lg:grid-cols-12 gap-6 mt-10 mb-5'>

          {/* Left Sidebar (hidden on mobile) */}
          <aside className='hidden lg:block lg:col-span-3 sticky top-2 h-fit'>
            <LeftAside />
          </aside>

          {/* Main Content */}
          <section className="col-span-1 lg:col-span-6">
            <div className='flex items-center gap-4'>
              {/* Mobile Menu Button */}
              <div className="lg:hidden ">
                <label htmlFor="drawer-toggle" className="btn btn-sm">
                  <GiHamburgerMenu size={20} />
                </label>
              </div>
              <h2 className='text-xl font-semibold'>Dragon News Home</h2>
            </div>
            {state == "loading" ? <Loading /> : <Outlet />}
          </section>

          {/* Right Sidebar */}
          <aside className='col-span-1 lg:col-span-3 sticky top-2 h-fit'>
            <RightAside />
          </aside>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>

      {/* Drawer Sidebar (Mobile) */}
      <div className="lg:hidden drawer-side z-50">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>

        <div className="menu p-4 w-64 min-h-full bg-base-200">
          <LeftAside closeDrawer={closeDrawer} />
        </div>
      </div>

    </div>
  );
};

export default HomeLayout;