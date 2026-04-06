import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/Main/NewsCard';

const CategoryNews = () => {
  const { categoryId } = useParams();
  const id = Number(categoryId)
  const newsData = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id === 0) {
      setCategoryNews(newsData)
    }
    else if (id === 1) {
      const breakingNews = newsData.filter(news => news.others.is_today_pick === true);
      setCategoryNews(breakingNews)
    }
    else {
      const filterdNews = newsData.filter(news => news.category_id === id)
      setCategoryNews(filterdNews)
    }

  }, [newsData, id])
  return (
    <>
      {categoryNews.length === 0 ? <div>
        <h2 className='font-semibold md:font-bold text-xl text-center py-20 text-accent'>News Not Found!</h2>
      </div> :
        <div className='grid grid-cols-1 gap-8 mt-5'>
          {
            categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
          }
        </div>
      }
    </>
  );
};

export default CategoryNews;