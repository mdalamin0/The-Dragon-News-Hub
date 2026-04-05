import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  
  useEffect(() => {
    fetch("/news.json")
    .then(res => res.json())
    .then(data => {
      const breakingNews = data.filter(news => news?.others?.is_today_pick === true)
      setLatestNews(breakingNews)
    })
  }, [])
  
  return (
    <div className='flex items-center gap-3 bg-base-200 p-2 md:p-3'>
        <p className='bg-secondary text-base-100 px-4 md:px-6 py-1 md:py-2'>Latest</p>
      <Marquee className='' pauseOnHover={true} speed={60}>
       {latestNews.map(news => <p className='font-medium md:font-semibold mr-3'>{news?.title}.</p>)}
      </Marquee>

    </div>
  );
};

export default LatestNews;