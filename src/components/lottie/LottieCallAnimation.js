import React from 'react';
import Lottie from 'lottie-react';
import animationData from './CallAnimation.json';

const LottieCallAnimation = () => {
  return (
    <div>
      <Lottie className='h-[55px] w-[55px]' animationData={animationData} />
    </div>
  );
};

export default LottieCallAnimation;
