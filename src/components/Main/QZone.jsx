import React from 'react';
import classImg from "../../assets/class.png"
import swimmingImg from "../../assets/swimming.png"
import playgroundImg from "../../assets/playground.png"
import bgImg from "../../assets/bg.png"

const QZone = () => {

  return (
    <>
      <div className='bg-base-200 p-3'>
        <h2 className='text-xl font-semibold mb-5'>Q-Zone</h2>
        <div className='space-y-5'>
          <img  src={swimmingImg} loading="lazy" className='w-full' alt="swimming" />
          <img src={classImg} loading="lazy" className='w-full' alt="class" />
          <img src={playgroundImg} loading="lazy" className='w-full' alt="playground" />
        </div>
      </div>
      <div>
        <img src={bgImg} loading="lazy" className='w-full' alt="" />
      </div>
    </>
  );
};

export default QZone;