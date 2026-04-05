import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({newsDetailsData}) => {
  const {title, thumbnail_url, details, category_id} = newsDetailsData
  return (
    <div>
      <Helmet>
        <title>{`News Details | ${title}`}</title>
      </Helmet>
      <h2 className='font-semibold text-xl mb-5'>Dragon News</h2>
      <div className='border-2 border-base-200 rounded p-4 md:p-7.5 space-y-5'>
        <img src={thumbnail_url} className='w-full object-cover rounded' alt="image" />
        <h2 className='font-semibold md:font-bold md:text-2xl'>{title}</h2>
        <p className='text-accent text-sm md:text-[16px]'>{details}</p>
        <Link to={`/category/${category_id}`} className='btn btn-secondary rounded-none'>
        <FaArrowLeft size={18} /> All news in this category</Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;