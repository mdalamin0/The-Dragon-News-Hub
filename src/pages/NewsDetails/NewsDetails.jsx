import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Header from '../../components/Header/Header';
import RightAside from '../../components/Main/RightAside';
import NewsDetailsCard from '../../components/NewsDetailsCard/NewsDetailsCard';

const NewsDetails = () => {
  const [newsDetailsData, setNewsDetailsData] = useState({});
  const newsData = useLoaderData();
  const { newsId } = useParams();
  useEffect(() => {
    const newsDetails = newsData.find(news => news.id === newsId);
    setNewsDetailsData(newsDetails)
  }, [newsData, newsId])

  return (
    <div className='my-container mt-12.5'>
      <Header />
      <main className='grid grid-cols-12 gap-8 mt-8'>
        <section className='col-span-9'>
          <NewsDetailsCard newsDetailsData={newsDetailsData} />
        </section>
        <aside className='col-span-3'>
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;