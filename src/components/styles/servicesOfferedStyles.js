import cntl from "cntl";

export const ServicesOfferedContainer = cntl`
 bg-gradient-to-b from-[#B2D966] via-[#D7E4AD] to-[#F6F8D4] w-screen flex flex-col items-center`;

export const ServicesOfferedItemsStyle = {
  ItemContainer: cntl`
  		container
		w-[70vw] py-10`,
  ItemContainerBreakpointStyles: cntl``,

  Title: cntl`
  		bg-white-80%
		rounded
		px-3 py-2
		ml-[3rem]`,
  TitleBreakpointStyles: cntl``,

  SectionOne: cntl`
  		pt-5
		flex
		justify-center`,
  SectionOneBreakpointStyles: cntl``,

  PtOne: cntl`container w-3/4`,
  PtOneBreakpointStyles: cntl``,

  PtOne_Subtitle: cntl`
  		font-Metropolis
		text-[3rem]
		leading-[3rem]
		drop-shadow-thick`,
  PtOne_SubtitleBreakpointStyles: cntl``,

  PtOne_Description: cntl`
  		text-[1.5rem]
		font-extralight
		pt-5`,

  PtOne_Button: cntl`
  		bg-[#476930]
		text-white
		px-8 py-3
		rounded-[1.2rem]
		drop-shadow-thick mt-5
		transition duration-300
		flex
		space-x-2
		items-center
		
		hover:bg-white
		hover:text-[#476930]
		hover:-translate-y-1
		`,

  PtTwoContainer: cntl`w-[10rem]`,

  PtTwo: cntl`
  		drop-shadow-thick
		p-2`,
  PtTwoBreakpointStyles: cntl``,

  SectionTwo: cntl`flex justify-center`,
};
