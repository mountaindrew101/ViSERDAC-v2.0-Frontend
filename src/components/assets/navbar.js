import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ViSERDACLogo from './navComponents/assets/ViSERDAC-Logo-Landscape-01-01.svg';
import ViSERDACLogoMobile from './navComponents/assets/ViSERDAC-logo-mobile.svg';
import { NavItems } from './navComponents/NavItems';
import { Link } from 'gatsby';
import AboutUsDropdown from './navComponents/MenuDropdown/AboutUsDropdown';
import ServicesOfferedDropdown from './navComponents/MenuDropdown/ServicesOfferedDropdown';

const NavBar = () => {
  const navYellowBar = <div className='lg:h-2 w-screen h-4 bg-[#FDCB00]'></div>;

  const [MenuButton, MenuToggle] = useState(false);
  const Toggle = () => {
    MenuToggle(!MenuButton);
  };

  return (
    <nav>
      <motion.div
        className='fixed inset-x-0 top-0 z-50'
        initial={{
          y: -50,
        }}
        animate={{
          y: 0,
        }}
      >
        <motion.div className=''>
          {navYellowBar}
          <div className='flex justify-center bg-white sm:h-16 md:h-20 h-28 lg:drop-shadow-lg lg:h-24 drop-shadow-thicknear'>
            {/* Mobile View */}
            <div
              className='flex-row items-center justify-center hidden w-screen lg:flex'
              id='Mobile-Breakpoint'
            >
              <div className='self-center flex-grow sm:pl-0 xs:ml-[-2rem] md:pl-5 pl-10 '>
                <ViSERDACLogoMobile className='sm:scale-75 xs:scale-[.60] md:scale-[.80] drop-shadow-thick' />
              </div>
              <div>
                {/* Menu Button */}
                <div id='Menu-Button'>
                  <button onClick={Toggle}>
                    <div className='xs:scale-75 hidden lg:flex flex-col space-y-[0.3rem] flex-shrink md:pr-14 sm:pr-10 p-5 pr-16'>
                      <span
                        className={
                          MenuButton
                            ? 'transition duration-700 ease-in-out block rounded-lg h-[0.25rem] w-[1.6rem] translate-y-[0.54rem] rotate-45 bg-[#710C10] drop-shadow-thickmd'
                            : 'transition duration-700 ease-in-out block rounded-lg h-[0.25rem] w-[1.6rem] bg-[#710C10] drop-shadow-thickmd'
                        }
                      ></span>
                      <span
                        className={
                          MenuButton
                            ? 'transition duration-700 ease-in-out block rounded-lg h-[0.25rem] w-[1.6rem] bg-[#FDCB00] drop-shadow-thickmd opacity-0'
                            : 'transition duration-700 ease-in-out block rounded-lg h-[0.25rem] w-[1.6rem] translate-x-[0.15rem] scale-x-[1.25] bg-[#FDCB00] drop-shadow-thickmd'
                        }
                      ></span>
                      <span
                        className={
                          MenuButton
                            ? 'transition duration-700 ease-in-out block rounded-lg h-[0.25rem] w-[1.6rem] translate-y-[-0.54rem] -rotate-45 bg-[#710C10] drop-shadow-thickmd'
                            : 'transition duration-700 ease-in-out block rounded-lg h-[0.25rem] w-[1.6rem] bg-[#710C10] drop-shadow-thickmd'
                        }
                      ></span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div className='flex flex-row lg:hidden' id='Desktop-Breakpoints'>
              <Link
                to='/'
                className='self-center transition duration-300 ease-in-out drop-shadow-lg hover:drop-shadow-thick hover:-translate-x-1 hover:-translate-y-1 h-[5rem] w-[18rem]'
              >
                <ViSERDACLogo className='translate-y-2' />
              </Link>
              <div className='w-16 h-10'></div>
              <NavItems className='' />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Dropdown Menu / Accordion */}
      <div
        className={
          MenuButton
            ? 'transition-all duration-700 ease-in-out hidden lg:flex bg-white z-40 fixed w-screen top-[6.5rem] md:top-[5rem] sm:top-[4rem] flex-col drop-shadow-lg visible'
            : 'transition-all duration-700 ease-in-out hidden lg:flex bg-white z-40 fixed w-screen top-[6.5rem] md:top-[5rem] sm:top-[4rem] flex-col drop-shadow-lg invisible -translate-y-full'
        }
      >
        <ServicesOfferedDropdown />
        <AboutUsDropdown />
        <div className='transition-all duration-500 ease-in-out h-[7rem] xs:h-[4rem] w-screen flex justify-end items-center'>
          <button className='xs:text-[1rem] xs:pt-1 xs:pb-1 xs:pr-7 xs:pl-7 xs:mb-3 xs:mr-10 text-lg mb-10 mr-16 pl-8 pr-8 pt-2 pb-2 bg-[#FDCB00] rounded-[50px] font-medium drop-shadow-thicknear whitespace-nowrap'>
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
