import cntl from "cntl";

export const HeroStyles = {
  HeroContainer: cntl`
        w-screen
        h-[50rem]`,
  HeroContainerBreakpointStyles: cntl`
        lg:h-[60rem] lg:bg-[#003D00]
        md:h-[55rem]
        sm:h-[55rem]
        xs:h-[50rem]`,

  MainBG: cntl`
        h-[50rem]
        bg-[#003D00]
        flex flex-row
        items-center justify-center
        space-x-10`,
  MainBGBreakpointStyles: cntl`
        xl:space-x-0
        lg:flex-col
        lg:h-[6rem]
        md:h-1
        xs:h-0
        xs:-mt-6`,

  GradientWhiteBG: cntl`
        absolute
        bg-gradient-radial from-white to-[#003D00] rounded-full scale-150
        h-[25rem] w-[25rem]
        blur-2xl opacity-30`,
  GradientWhiteBGBreakpointStyles: cntl`
        lg:top-[15rem]`,

  ContentContainer: cntl`
        flex flex-col
        space-y-4
        self-start
        mt-[13rem] ml-[-10rem]`,
  ContentContainerBreakpointStyles: cntl`
        xl:mt-[15rem]    
        lg:self-center
        lg:mt-[20rem]
        md:justify-center`,

  Content_h1: cntl`
        text-[#FDCB00]
        font-bold
        text-5xl text-start drop-shadow-thicknearwhite`,
  Content_h1BreakpointStyles: cntl`
        xl:text-[2.5rem]      
        lg:text-center
        md:text-[2.2rem]
        sm:text-[2rem]
        xs:text-[1.65rem]
        `,

  Content_h2: cntl`
        font-bold text-2xl text-white 
        drop-shadow-thicknear
        pb-7 whitespace-nowrap  `,
  Content_h2BreakpointStyles: cntl`
        xl:text-[1.15rem]
        lg:pb-3
        md:leading-5 md:text-[1rem]
        sm:text-center sm:text-[0.8rem]
        xs:leading-4 xs:text-[0.7rem]`,

  LearnMoreButton: cntl`
         text-white rounded-full
        pt-3 pb-3 w-[12rem]
        text-center
        font-medium text-md drop-shadow-thicknear
        transition duration-300 ease-in-out
        
        hover:scale-110
        hover:bg-white 
        hover:text-[#476930] 

        active:bg-[#476930] 
        active:text-white active:scale-100 bg-[#476930] 
        `,
  LearnMoreButtonBreakpointStyles: cntl`
        lg:hidden`,
};

export const HeroAnimationStyles = {
  HeroAnimationContainer: cntl`
        self-start 
        pt-20 h-[30rem] w-[28rem]`,
  HeroAnimationContainerBreakpointStyles: cntl`
        xl:w-[32rem]
        lg:self-center lg:pt-0`,

  ChecklistContainer: cntl`
        absolute z-[6]
        mt-[20rem] ml-[7rem]`,
  ChecklistContainerBreakpointStyles: cntl`
        sm:mt-[25rem]
        xs:mt-[18rem]`,
  Checklist: cntl`
        h-[15rem] 
        xl:h-[13rem]
        sm:h-[14rem]
        xs:h-[10rem]`,

  BarGraphContainer: cntl`
        z-[5] absolute
        mt-[3rem] ml-[6rem]`,
  BarGraphContainerBreakpointStyles: cntl`
        xl:mt-[5rem]
        sm:mt-[6rem]
        xs:ml-[5rem]`,
  BarGraph: cntl`
        h-[17rem]
        xl:h-[15rem]
        sm:h-[15rem]
        xs:h-[11rem]`,

  PieChartContainer: cntl``,
  PieChartContainerBreakpointStyles: cntl``,
  PieChart: cntl``,

  GearGreenContainer: cntl``,
  GearGreenContainerBreakpointStyles: cntl``,
  GearGreen: cntl``,

  GearGrayContainer: cntl``,
  GearGrayContainerBreakpointStyles: cntl``,
  GearGray: cntl``,

  AppWindowContainer: cntl`
        z-[1] absolute`,
  AppWindowContainerBreakpointStyles: cntl``,
  AppWindow: cntl`
        z-[1] 
        absolute 
        xl:mt-10
        xl:h-[38rem]
        sm:h-[40rem] 
        sm:ml-6 
        xs:h-[30rem] 
        xs:ml-10 

        `,
};
