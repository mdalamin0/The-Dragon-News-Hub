import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
  return (
    <div>
      <h2 className='text-xl font-semibold mb-5'>Find Us On</h2>
      <div className="join join-vertical w-full ">
        <button className="btn btn-xl text-[16px] text-accent join-item bg-base-100 justify-start "><FaFacebook size={22} className='text-blue-700 mr-2'/> Facebook</button>
        <button className="btn btn-xl text-[16px] text-accent join-item bg-base-100 justify-start"><FaTwitter size={22} className='text-blue-400 mr-2'/> Twitter</button>
        <button className="btn btn-xl text-[16px] text-accent join-item bg-base-100 justify-start"><FaInstagram size={22} className='text-pink-600 mr-2'/> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;