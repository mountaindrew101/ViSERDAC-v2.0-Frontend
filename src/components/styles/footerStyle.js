import cntl from "cntl";

export const FooterStyles = {
  MainContainer: cntl` flex flex-col items-center`,
  MainContainerBreakpointStyles: cntl``,

  FooterDividingLine: cntl`
        h-[0.10rem]
        w-[70vw]
        bg-[#c4c4c4]
        mb-10`,
  FooterDividingLineBreakpointStyles: cntl``,

  SectionOneContainer: cntl`
        flex flex-row space-x-[5vw]`,
  SectionOneContainerBreakpointStyles: cntl``,

  ContactDetailsContainer: cntl`
  		flex space-x-[5vw]`,
  ContactDetailsContainerBreakpointStyles: cntl``,
};

export const FooterSectionOne = {
  Container: cntl`
        flex flex-col
		items-center
		pb-14`,
  ContainerBreakpointStyles: cntl``,

  Text: cntl`
		text-[#9CA3AF]
		text-center
		
		after:content-[':']`,
  TextBreakpointStyles: cntl``,

  LogoContainer: cntl`
        flex flex-row
		self-center
        space-x-1`,
  LogoContainerBreakpointStyles: cntl``,

  Logo: cntl`
        h-14 w-14`,
  LogoBreakpointStyles: cntl``,
};

export const FooterContactDetails = {
  Container: cntl`text-sm`,
  ContainerBreakpointStyles: cntl``,

  Contact: cntl`pb-8 font-medium text-base`,
  ContactBreakpointStyles: cntl``,

  Address: cntl`
  		flex items-center space-x-7 ml-3`,
  AddressBreakpointStyles: cntl``,

  Landline: cntl`
  		flex items-center space-x-3 `,
  LandlineBreakpointStyles: cntl``,
  LandlineText: cntl`
  		cursor-pointer
		transition
		duration-300
		ease-in-out

		hover:text-[#003D00]
		hover:translate-x-2
  		hover:underline`,

  Email: cntl`
  		flex items-center space-x-3 -mt-1`,
  EmailBreakpointStyles: cntl``,
  EmailText: cntl`
  		-mt-2
		transition
		duration-300
		ease-in-out

		hover:text-[#003D00]
		hover:translate-x-2
		hover:underline`,

  CopiedVisible: cntl``,
  CopiedVisibleBreakpointStyles: cntl``,

  CopiedInvisible: cntl``,
  CopiedInvisibleBreakpointStyles: cntl``,
};

export const FooterLinks = {
  Container: cntl`
  		space-y-3`,
  ContainerBreakpointStyles: cntl``,

  UsefulLinks: cntl`
  		font-medium`,
  UsefulLinksBreakpointStyles: cntl``,

  Links: cntl`
  		underline
		text-sm
		transition
		duration-300
		ease-in-out
		
		hover:no-underline
		hover:text-[#003D00]
		hover:translate-x-2`,
  LinksBreakpointStyles: cntl``,
};
