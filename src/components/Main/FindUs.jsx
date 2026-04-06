import React from 'react';
import {  FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-5'>Find Us On</h2>
      <div className="join join-vertical w-full ">
        <a href='https://www.linkedin.com/in/md-al-amin-60aa32219/' target='_blank' className="btn btn-xl text-[16px] text-accent join-item bg-base-100 justify-start "><FaLinkedin size={22} className='text-blue-700 mr-2'/> LinkedIn</a>
        <a href='https://github.com/mdalamin0' target='_blank' className="btn btn-xl text-[16px] text-accent join-item bg-base-100 justify-start"><FaGithub size={22} className='text-gray-800 mr-2'/> GitHub</a>
        <button className="btn btn-xl text-[16px] text-accent join-item bg-base-100 justify-start"><FaInstagram size={22} className='text-pink-600 mr-2'/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;