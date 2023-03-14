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

export const navBarStyle = {
Active: cntl`z-[49] md:w-full md:visible`,
Inactive: cntl`md:invisible`,

};

export const navBarListStyle = cntl`
    flex
    text-[0.95rem] space-x-4 md:flex md:flex-col md:w-full md:space-x-0 md:translate-y-5`;

export const navListItemStyle = cntl`
    group-hover:translate-y-[-0.15rem]
    transition duration-400 ease-in-out
    group-hover:text-green-nav
    flex
    whitespace-nowrap md:w-[120%] md:bg-white md:p-5 md:group-hover:translate-y-0 md:justify-center`;

export const ArrowNavStyle = cntl`
    transition duration-400 ease-in-out
    h-5 w-5
    mt-0.5
    group-hover:fill-[#388E3C]`;

export const listItemGreenBarStyle = cntl`absolute top-[65%] h-[2px] rounded-xl bg-green-nav md:hidden`;

export const groupController = cntl`group`;


