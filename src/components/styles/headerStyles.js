import cntl from "cntl";

export const headerContainerStyle = cntl`
    flex
    flex-col
    bg-white
    drop-shadow-thickmd
    justify-center
    items-center
    `;

export const headerSubContainerStyle = cntl`
    flex
    flex-row
    container
    pr-[10rem]
    pl-[20rem]
    items-center
    justify-center
    h-24
    bg-white`;

export const yellowBarStyle = cntl`w-screen h-4 bg-[#FDCB00]`;

export const gapControllerStyle = cntl`grow`;

export const headerLogoDesktopStyle = cntl`
    items-center
    translate-y-2
    transition
    duration-300
    ease-in-out
    drop-shadow-lg
    hover:drop-shadow-thick
    hover:-translate-x-1
    hover:translate-y-1
    h-[5rem] w-[16rem]`;

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
        transition-all duration-500 ease-in-out`,
};

export const backToTopTextStyles = {
  Invisible: cntl`
        rotate-90 -translate-x-4
        text-white opacity-0
        transition duration-300 ease-in-out pointer-events-none`,
  Visible: cntl`
        rotate-90 translate-y-12 -translate-x-4
        text-[#003D00]
        group-hover:translate-y-[-3rem] group-hover:opacity-0 group-hover:text-white
        transition duration-300 ease-in-out pointer-events-none`,
};
