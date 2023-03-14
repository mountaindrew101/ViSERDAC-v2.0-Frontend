import cntl from "cntl";

export const WhatIsViserdacStyles = {
  SectionOneContainer: cntl`
		flex
    justify-center items-center
    container
    w-[60rem]
    mt-[3rem]
    
    md:flex-col md:mt-[0rem]
    `,

  SectionOneWhatIsViserdacContainer: cntl`
    z-10
    flex
    flex-col
    w-[50%]
    mx-[1rem]
    
    md:items-center md:mb-5`,

  SectionOneWhatIsViserdac: cntl`
    font-poppins
    font-semibold
    text-[#003D00]
    leading-[4.5rem]
    drop-shadow-thicknear
    text-[5rem]
    whitespace-nowrap

    md:text-[3rem] md:leading-[3rem]`,

  SectionOneWeSpecializeContainer: cntl`
  bg-[#FFF]/75
    flex flex-col items-center
    rounded-[2rem]
    text-left container
    py-2 md:scale-90 md:w-[95vw] md:self-center`,
  SectionOneWeSpecialize: cntl`	
		 font-Metropolis text-[#003D00]
     text-[1.8rem] leading-8
     text-center
     w-11/12
     drop-shadow-thicknear

     md:text-[1.2rem] md:leading-8 md:w-full xs:px-5`,

  SectionOneWeSpecializeSubtext: cntl`
    text-right
    ml-[2.2rem]
    w-[85%] pr-8
    self-end
    text-[1.04rem]
    md:text-[0.8rem] md:w-[80vw]`,

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
    
    md:text-[1.2rem] md:w-[90vw]
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

    md:w-[90vw] md:tracking-normal`,
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
    
    md:scale-[.60]`,

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
    items-center md:scale-[.60]
    md:translate-y-[-15rem]`,

  Title: cntl`
    bg-[#003D00]
    text-[#FDCB00]
    font-bold
    text-[2.5rem]
    rounded-full
    px-10
    
    md:text-center`,

  Subcontainer: cntl`
  flex space-x-4 justify-center items-center

  md:flex-col md:space-y-[-0.5rem]
  `,

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

    group
    hover:bg-[#003D00]
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

  SERDACsLogo: cntl`
    
    flex 
    justify-center`,

  SERDACsTextTitle: cntl`
    text-white`,
  SERDACsTextSubtitle: cntl`
    group-hover:text-[#FDCB00]
    text-[#003D00] 
    text-[1.8rem] 
    leading-9`,
};

export const ObjectivesStyles = {
  ObjectivesContainer: cntl`
    bg-white-80%
    rounded-[4rem]
    
    md:scale-[0.95] md:translate-y-[-24rem]
    `,
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

md:text-[2.5rem] md:leading-[2.5rem] md:pb-2`,
  ObjectivesListParent: cntl`
    pb-10 
    px-10 
    pt-5 
    
    md:text-xs md:px-2`,
  ObjectivesListContainer: cntl`
    flex
    items-center
    font-medium py-[0.2em]
    
     md:py-0`,
  ObjectivesListIcon: cntl` h-7 w-7 shrink-0 md:h-5 md:w-5`,
  ObjectivesListHighlight: cntl`
    pr-[0.3em]
    pl-[0.5em]
    text-[#003d00]`,
  ObjectivesListText: cntl`self-center`,
};

export const MeetOurTeamStyles = {
  Container: cntl`md:translate-y-[-20rem]`,

  TitleContainer: cntl`
  font-poppins font-bold flex flex-col translate-x-[3rem] translate-y-[2rem] md:translate-y-[5rem]`,

  TitlePt1: cntl`
  text-[#003D00] text-[3rem] translate-x-[2rem] drop-shadow-thicknear`,

  TitlePt2: cntl`
  text-[#FDCB00] text-[5rem] translate-y-[-3rem] drop-shadow-thicknear`,

  TitlePt3: cntl`
  text-[#003D00] text-[10rem] absolute translate-x-[15rem] translate-y-[-2rem] drop-shadow-thicknear`,

  MembersParent: cntl` grid grid-cols-2 gap-2 md:flex md:flex-col md:scale-[0.9]`,

  MembersContainer: cntl`
  bg-[#003D00] flex items-center space-x-4 px-7 py-6 rounded-2xl w-[25rem] drop-shadow-thicknear`,
  MemberTextsContainer: cntl`font-Metropolis  text-end `,
  MemberName: cntl`font-[1000] text-[1.5rem] text-[#DCE775]`,
  MemberPosition: cntl`text-[#FFF] italic`,
  MemberPhoto: cntl`rounded-full w-[10rem]`,
};

export const ScopeOfReachStyles = {
  Container: cntl`flex flex-col justify-center items-center space-y-5 md:translate-y-[-20rem]`,
  Title: cntl`bg-[#FDCB00] px-5 py-2 rounded-xl text-center w-[15em]`,
  Scope: cntl`w-[40rem] md:w-[80vw]`,
};
