import cntl from "cntl";

export const WhatIsViserdacStyles = {
  SectionOneContainer: cntl`
		flex
    justify-center items-center
    container
    w-[60rem]
    mt-[3rem]`,

  SectionOneWhatIsViserdacContainer: cntl`
    z-10
    flex
    flex-col
    w-[50%]
    mx-[1rem]
    `,

  SectionOneWhatIsViserdac: cntl`
    font-poppins
    font-semibold
    text-[#003D00]
    leading-[4.5rem]
    drop-shadow-thicknear
    text-[5rem]
    whitespace-nowrap
    `,

  SectionOneWeSpecializeContainer: cntl`
  bg-[#FFF]/75
    flex flex-col items-center
    rounded-[2rem]
    text-left container
    py-2
  `,
  SectionOneWeSpecialize: cntl`	
		 font-Metropolis text-[#003D00]
     text-[1.8rem] leading-8
     text-center
     w-11/12
     drop-shadow-thicknear
     `,

  SectionOneWeSpecializeSubtext: cntl`
    text-right
    ml-[2.2rem]
    w-[85%] pr-8
    self-end
    text-[1.04rem]
    `,

  SectionTwoContainer: cntl`
    mt-5
    w-[50rem]
    flex flex-col items-center justify-center
    text-center font-semibold text-[#003D00]
    text-[1.5rem]
    leading-7
    font-Metropolis
    bg-[#FFF]/75
    rounded-[2rem]
    
    `,
  SectionTwo: cntl`
    px-8 py-5
  `,

  SectionTwoSpan: cntl`text-[#c4a839]`,

  SectionThree: cntl`
    w-[50rem]
    text-[1.04rem]
    mt-5
    text-justify
    tracking-wider
    `,
};

export const MissionVisionStyles = {
  MissionVisionContainer: cntl`
    w-[50rem] h-[28rem]
    bg-[#EFE7D0]
    rounded-[3rem]
    flex
    justify-center
    items-center
    pt-16
    `,

  VisionContainer: cntl`
    w-[30rem] h-auto
     container relative
     flex justify-center
    `,

  VisionBG: cntl`
    mr-[-10rem]
    w-[25rem] h-auto
    absolute top-[-10rem] z-0
    `,

  VisionTextContainer: cntl`
    z-10
    mt-[-8rem]
    w-[20rem]
    text-end
    flex flex-col items-end`,

  VisionTitle: cntl`
    font-bold tracking-[0.2em] text-[2.3rem] text-[#003d00]
    drop-shadow-thicknear `,

  VisionSubtitle: cntl`
    w-[15rem] text-[1.15rem]
    font-medium leading-relaxed`,

  MissionContainer: cntl`
    w-[30rem] container relative flex justify-center
    `,

  MissionBG: cntl`
    ml-[-6.7rem]
    mt-[-9.1rem]
    w-[19rem] h-auto
    absolute z-0
    `,
  MissionTextContainer: cntl`
    z-10
    mr-[7rem]
    mt-[-7rem]
    w-[14rem]
    text-end
    flex flex-col items-end`,

  MissionTitle: cntl`
    font-bold tracking-[0.2em] text-[2.3rem] text-[#F7F5F4]
    drop-shadow-thicknear self-start`,

  MissionSubtitle: cntl`text-white font-medium text-[1.05rem]`,
};
