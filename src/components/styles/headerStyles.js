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
