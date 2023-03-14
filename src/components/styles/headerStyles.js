import cntl from "cntl";

export const headerContainerStyle = {
  Main: cntl`
        flex
        flex-col
        bg-white
        drop-shadow-thickmd
        justify-center
        items-center
        w-screen 
    `,
  Breakpoints: cntl`
        `,
};

export const headerSubContainerStyle = {
  Main: cntl`
        flex
        flex-row
        container
        pr-[10rem]
        pl-[20rem]
        items-center
        justify-center
        h-24
        bg-white
        ml-[-6rem]`,
  Breakpoints: cntl`md:h-0 sm:h-0 md:flex-col md:items-start md:pr-0 md:pl-[0rem] md:pt-[5rem] lg:pl-[14rem]`,
};

export const yellowBarStyle = cntl`w-screen h-4 bg-[#FDCB00]`;

export const gapControllerStyle = cntl`w-[10vw] shrink-0 md:hidden lg:w-[3vw]`;

export const headerLogoDesktopStyle = {
  Main: cntl`
        items-center
        translate-y-2
        transition
        duration-300
        ease-in-out
        drop-shadow-lg
        shrink-0

        hover:drop-shadow-thick
        hover:-translate-x-1
        hover:translate-y-1
        h-[5rem] w-[16rem]`,
  Breakpoints: cntl`
        xl:scale-90 md:mt-[11rem] md:ml-10 sm:scale-75 sm:mt-[12rem]`,
};

export const backToTopParentContainerStyle = cntl`
        flex
        w-screen
        justify-end
        items-end pr-10
        xs:pr-0;`

export const backToTopContainerStyle = {
  Invisible: cntl`
        fixed
        invisible opacity-0 scale-0
        origin-right
        transition-all duration-500 ease-in-out`,
  Visible: cntl`
        fixed
        visible opacity-100 scale-100
        origin-left
        transition-all duration-500 ease-in-out
        xs:scale-90`,
};

export const backToTopTextStyles = {
  Invisible: cntl`
        rotate-90 -translate-x-4
        text-white opacity-0
        transition duration-300 ease-in-out pointer-events-none md:translate-x-5`,
  Visible: cntl`
        rotate-90 translate-y-12 -translate-x-4
        text-[#003D00]
        group-hover:translate-y-[-3rem] group-hover:opacity-0 group-hover:text-white
        transition duration-300 ease-in-out pointer-events-none md:translate-x-5`,
};

export const mobileMenu = cntl`
    absolute
    top-[2.75rem]
    right-[2rem]
    flex-col
    space-y-1
    w-[30px]
    h-[25px]
    hidden
    z-50
    
    md:flex`;

    export const mobileMenuBar = cntl`
    h-[3px]
    w-full
    bg-[#710C10]
    rounded-[10px]
    z-50`;