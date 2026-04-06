import React, { use } from 'react';
import { Navigate, NavLink } from 'react-router';


const Categories = ({ categoriesPromise, closeDrawer }) => {
  const categories = use(categoriesPromise);
  return (
    <div className='grid grid-cols-1 gap-2 mt-5'>
      {
        categories.map(category =>

          <NavLink key={category.id}
            to={`/category/${category.id}`}
            onClick={closeDrawer}
            className="text-accent font-medium hover:bg-base-300 pl-14 py-2.5 rounded"
          >{category.name}</NavLink>
        )
      }
    </div>
  );
};

export default Categories;