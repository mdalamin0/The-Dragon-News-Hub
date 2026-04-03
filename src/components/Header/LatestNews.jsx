import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  return (
    <div className='flex items-center gap-3 bg-base-200 p-3'>
        <p className='bg-secondary text-base-100 px-6 py-2'>Latest</p>
      <Marquee className='flex items-center font-semibold gap-5' pauseOnHover={true} speed={60}>
        <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as.</p>
        <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as.</p>
        <p>Match Highlights: Germany vs Spain — as it happened! Match Highlights: Germany vs Spain as.</p>
      </Marquee>

    </div>
  );
};

export default LatestNews;