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

  ContactDetailsContainer: cntl``,
  ContactDetailsContainerBreakpointStyles: cntl``,
};

export const FooterSectionOne = {
  Container: cntl`
        flex flex-col items-center`,
  ContainerBreakpointStyles: cntl``,

  Text: cntl`text-[#9CA3AF] text-center after:content-[':']`,
  TextBreakpointStyles: cntl``,

  LogoContainer: cntl`
        flex flex-row self-center
        space-x-1`,
  LogoContainerBreakpointStyles: cntl``,

  Logo: cntl`
        h-14 w-14
     
    `,
  LogoBreakpointStyles: cntl``,
};
