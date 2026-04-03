import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({newsDetailsData}) => {
  const {title, thumbnail_url, details, category_id} = newsDetailsData
  return (
    <div>
      <h2 className='font-semibold text-xl mb-5'>Dragon News</h2>
      <div className='border-2 border-base-200 rounded p-7.5 space-y-5'>
        <img src={thumbnail_url} className='w-full h-[400px] object-cover rounded' alt="image" />
        <h2 className='font-bold text-2xl'>{title}</h2>
        <p className='text-accent'>{details}</p>
        <Link to={`/category/${category_id}`} className='btn btn-secondary rounded-none'>
        <FaArrowLeft size={18} /> All news in this category</Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;