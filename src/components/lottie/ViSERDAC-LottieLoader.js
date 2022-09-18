import React from 'react';
import Lottie from 'lottie-react';
import animationData from './ViSERDAC-LottieLoader.json';

const ViSERDACLottieLoader = () => {
  return (
    <div className='drop-shadow-thicknear'>
      <Lottie className='h-[300px] w-[450px]' animationData={animationData} />
    </div>
  );
};

export default ViSERDACLottieLoader;
