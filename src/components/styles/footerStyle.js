import cntl from "cntl";

export const FooterStyles = {
  MainContainer: cntl``,
  MainContainerBreakpointStyles: cntl``,

  FooterDividingLine: cntl`
        h-1 w-20 bg-black`,
  FooterDividingLineBreakpointStyles: cntl``,

  SectionOneContainer: cntl`
        flex flex-row space-x-10`,
  SectionOneContainerBreakpointStyles: cntl``,

  ContactDetailsContainer: cntl``,
  ContactDetailsContainerBreakpointStyles: cntl``,
};

export const FooterSectionOne = {
  Container: cntl`
        flex flex-col items-center`,
  ContainerBreakpointStyles: cntl``,

  Text: cntl``,
  TextBreakpointStyles: cntl``,

  LogoContainer: cntl`
        flex flex-row self-center
        space-x-1`,
  LogoContainerBreakpointStyles: cntl``,

  Logo: cntl`
        h-12 w-12
     bg-black rounded-full
    `,
  LogoBreakpointStyles: cntl``,
};
