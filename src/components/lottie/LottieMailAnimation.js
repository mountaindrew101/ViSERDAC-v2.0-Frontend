import React from 'react';
import Lottie from 'lottie-react';
import animationData from './MailAnimation.json';

const LottieMailAnimation = () => {
  return (
    <div>
      <Lottie className='h-[55px] w-[55px]' animationData={animationData} />
    </div>
  );
};

export default LottieMailAnimation;
