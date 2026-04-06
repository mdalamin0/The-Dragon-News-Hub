import React, { Suspense } from 'react';
import Categories from './Categories';

const categoriesPromise = fetch("/categories.json").then(res => res.json());

const LeftAside = ({closeDrawer}) => {
  return (
    <div>
      <h2 className='font-semibold text-xl'>All Caterogy</h2>
      <Suspense fallback={<span className="mt-10 loading loading-spinner text-neutral"></span>}>
        <Categories categoriesPromise={categoriesPromise} closeDrawer={closeDrawer}/>
      </Suspense>
    </div>
  );
};

export default LeftAside;