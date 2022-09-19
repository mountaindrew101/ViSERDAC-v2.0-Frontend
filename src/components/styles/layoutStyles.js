import cntl from "cntl";

export const layoutContainerStyle = cntl`
    flex
    flex-col
    justify-center
    items-center
    font-poppins
    `;

export const backToTopStyles = {
  backToTopParent: cntl`
        w-14 h-14
        bg-[#FDCB00]
        rounded-full
        flex justify-center items-center
        translate-y-[0.12rem]
        drop-shadow-thicknear
        transition duration-500 ease-in-out
        z-50`,
  backtoTopSubParent: cntl`
        w-14 h-14
        bg-[#003D00] rounded-full
        flex justify-center items-center
        translate-y-[-0.12rem]
        transition duration-500 ease-in-out`,
  // HOVER
  backToTopParentHover: cntl`
        group
        hover:bg-[#003D00] hover:scale-125`,
  backToTopSubParentHover: cntl`
        group-hover:bg-white`,

  // Arrow Styles
  backToTopArrowStyle: cntl`
        h-8 w-8
        group-hover:stroke-[#003D00]
        group-hover:translate-y-[-0.15rem]
        transition duration-500 ease-in-out`,
};
