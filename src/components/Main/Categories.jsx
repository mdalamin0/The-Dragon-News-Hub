import React, { use } from 'react';
import { Navigate, NavLink } from 'react-router';


const Categories = ({ categoriesPromise }) => {
  const categories = use(categoriesPromise);
  return (
    <div className='grid grid-cols-1 gap-2 mt-5'>
      {
        categories.map(category =>

          <NavLink key={category.id}
            to={`/category/${category.id}`}
            className="text-accent font-medium hover:bg-base-300 px-16 py-4 rounded"
          >{category.name}</NavLink>
        )
      }
    </div>
  );
};

export default Categories;