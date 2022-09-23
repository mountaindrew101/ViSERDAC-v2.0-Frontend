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

export const navBarStyle = cntl`z-50`;

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

export const listItemGreenBarStyle = cntl`absolute top-[65%] h-[2px] rounded-xl bg-green-nav`;

export const groupController = cntl`group`;
