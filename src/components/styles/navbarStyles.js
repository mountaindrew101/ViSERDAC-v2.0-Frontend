import cntl from "cntl";

export const hoverExpand = {
  rest: {
    scaleX: 0,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 80,
      ease: "easeInOut",
    },
  },
  hover: {
    scaleX: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 80,
      ease: "easeInOut",
    },
  },
};

export const navBarListStyle = cntl`
    flex
    text-[0.95rem] space-x-4`;

export const navListItemStyle = cntl`
    group-hover:translate-y-[-0.15rem]
    transition duration-400 ease-in-out
    group-hover:text-green-nav
    flex
    whitespace-nowrap`;

export const ArrowNavStyle = cntl`
    transition duration-400 ease-in-out
    h-5 w-5
    mt-0.5
    group-hover:fill-[#388E3C]`;

export const listItemGreenBarStyle = cntl`absolute top-[65%] h-[1.5px] rounded-xl bg-green-nav`;

export const groupController = cntl`group`;

export const desktopDropdownContainerStyle = cntl`
    container
    absolute
    invisible
    -mt-2
    -translate-y-3 opacity-0
    group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
    transition-all ease-in-out duration-400`;

export const desktopDropdownSubContainerStyle = cntl`
    text-[0.8rem]
    w-[500px]
    h-[150px]
    pl-5 pt-5 mt-5 mb-5
    bg-white rounded-[21px]
    drop-shadow-thicknear
    flex flex-col flex-wrap`;

export const navDropdownMapStyle = cntl`
    p-[0.2rem] pb-2
    transition
    duration-200
    ease-in-out
    hover:drop-shadow-md hover:-translate-y-1 hover:text-green-nav`;
