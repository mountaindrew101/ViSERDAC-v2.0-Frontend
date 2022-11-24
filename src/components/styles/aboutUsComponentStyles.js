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
    drop-shadow-md
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

export const OtherSERDACsStyles = {
  Container: cntl`
    flex
    flex-col
    justify-center
    items-center`,
  Title: cntl`
    bg-[#003D00]
    text-[#FDCB00]
    font-bold
    text-[2.5rem]
    rounded-full
    px-10
     `,
  Subcontainer: cntl`flex space-x-4 justify-center items-center`,
  Map: cntl`
    bg-[#D1F1FF]
    rounded-[3rem]
    px-[6rem] py-[1.2rem]
    drop-shadow-thickmd
    scale-[.85]
    `,
  MapComponents: cntl`
    drop-shadow-thicknear
    fill-[#388E3C]
    w-[18rem]
    transition
    duration-200
    ease-in-out
  `,
  MapComponentHover: cntl`fill-[#FDCB00]`,
  SERDACsContainer: cntl`
    flex flex-col
    space-y-5 my-10
    w-[30rem]
   
    `,
  SERDACsSubcontainer: cntl`
    flex
    space-x-5
    bg-[#FDCB00]
    rounded-[1.9rem]
    px-6 py-2
    drop-shadow-thicknear
    transition
    duration-200
    ease-in-out

    hover:-translate-y-2
    `,
  SERDACsText: cntl`
    flex flex-col
    justify-center
    text-center
    font-Metropolis
    drop-shadow-thicknear
    text-[1.2rem]
    font-bold
    `,
  SERDACsLogo: cntl`w-[30%] flex justify-center`,
  SERDACsTextTitle: cntl`text-white`,
  SERDACsTextSubtitle: cntl`text-[#003D00] text-[1.8rem] leading-9`,
};

export const ObjectivesStyles = {
  ObjectivesContainer: cntl`
    bg-white-80%
    rounded-[4rem]`,
  ObjectivesTextContainer: cntl`
    bg-[#FDCB00]    
    rounded-full
    `,
  ObjectivesText: cntl`
    font-semibold
    text-center
    text-[4rem]
    pb-[1rem]
    leading-[3.5rem]
    text-[#003D00]
    drop-shadow-thicknear
`,
  ObjectivesListParent: cntl`
    pb-10 
    px-10 
    pt-5`,
  ObjectivesListContainer: cntl`
    flex
    items-center
    font-medium py-[0.2em]`,
  ObjectivesListIcon: cntl` w-7`,
  ObjectivesListHighlight: cntl`
    pr-[0.3em]
    pl-[0.5em]
    text-[#003d00]`,
  ObjectivesListText: cntl``,
};
