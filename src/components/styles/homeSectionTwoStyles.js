import cntl from "cntl";

export const homeSectionTwoContainerStyles = {
  MainContainer: cntl``,
  MainContainerBreakpointStyles: cntl``,

  SubContainer: cntl``,
  SubContainerBreakpointStyles: cntl``,
};

export const WeSpecializeStyles = {
  MainContainer: cntl`
        z-20
        group

        hover:z-40`,
  MainContainerBreakpoints: cntl``,

  ContentContainer: cntl`
        transition duration-300 ease-in-out
        w-[745px] h-[312px]
        bg-[#003D00]
        rounded-[36px]
        shadow-xl
        flex flex-col items-center justify-center`,
  ContentContainerBreakpoints: cntl`
        lg:w-[600px]
        md:w-[500px]
        md:h-[280px]
        sm:h-[330px]
        sm:w-[400px]
        xs:h-[200px]
        xs:w-[300px]
        min-xl:group-hover:scale-105
        `,

  Content_h3: cntl`
        font-bold
        text-[#DCE775]
        justify-self-center
        ml-10
        text-5xl`,
  Content_h3BreakpointStyles: cntl`
        lg:pr-5
        xs:ml-8
        xs:leading-6
        xs:text-[1.5rem]
        md:text-[2.1rem]
        lg:text-4xl `,

  Button: cntl`
        transition duration-300 ease-in-out self-start 
        active:bg-[#FDCB00]  
        bg-[#FDCB00] ml-12 mt-4 p-3 pr-4 pl-4 rounded-[50px] 
        flex flex-row`,
  ButtonBreakpointStyles: cntl` 
        xs:ml-8 
        xs:text-[0.7rem] 
         xs:p-1 
        xs:pr-4 
        xs:pl-4 
        lg:text-sm 
        min-xl:hover:scale-105
        min-xl:hover:bg-white 
        min-xl:hover:-translate-y-1 min-xl:hover:shadow-xl`,
};

export const GetOpenAccessStyles = {
  MainContainer: cntl`
        group -mt-36 
        z-30 
        ml-[20rem]`,
  MainContainerBreakpointStyles: cntl`
        xl:ml-[10rem] 
        lg:mt-0 
        lg:ml-[10rem] 
        lg:mr-36 
        xs:ml-[9rem] 

        min-xl:hover:z-40`,

  ContentContainer: cntl`
        transition duration-300 ease-in-out 
        bg-[#EFE7D0] rounded-[36px] shadow-xl 
        flex flex-col`,
  ContentContainerBreakpoints: cntl`
        lg:w-[600px] 
        lg:h-[300px] w-[792px] h-[400px]
        md:w-[500px]
        sm:h-[330px] 
        sm:w-[400px]
        xs:h-[260px] 
        xs:w-[300px] 
         
        min-xl:group-hover:scale-105`,

  Content_h3Title: cntl`
        text-5xl 
        font-bold text-[#000] 
        text-right lg:mt-8 mr-14 mt-16`,
  Content_h3TitleBreakpointStyles: cntl`
        lg:text-4xl
        md:text-[2.1rem] 
        xs:mr-8 
        xs:leading-6 
        xs:text-[1.5rem]`,

  Content_h3Subtitle: cntl`
        text-right mr-14 text-lg mt-3`,
  Content_h3SubtitleBreakpointStyles: cntl`
        xs:pl-5 
        xs:mr-8 md:text-[0.9rem] 
        lg:text-base `,

  Button: cntl`
        transition duration-300 ease-in-out self-end 
        active:bg-[#FDCB00]  
         bg-[#FDCB00] mr-12 mt-4 p-3 pr-5 pl-5 rounded-[50px] 
        flex flex-row`,
  ButtonBreakpointStyles: cntl`
        lg:text-sm 
        xs:mr-8 
        xs:text-[0.7rem] 
        xs:p-1 
        xs:pr-4 
        xs:pl-4  

        min-xl:hover:bg-white 
        min-xl:hover:-translate-y-1 
         min-xl:hover:shadow-xl
         min-xl:hover:scale-105`,
};

export const ProvideTechnicalAssistance = {};
