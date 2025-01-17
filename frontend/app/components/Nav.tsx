'use client'
import React from 'react';
import Logo from "../../public/Images/PLogo.png";
import Link from "next/link";
import NavButton from "./NavButton";
"use-client";
import {useState, useEffect} from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import Hamburger from './Hamburger';


interface NavProps {
  showTitle: Boolean;
}

const Nav: React.FC<NavProps> = ({showTitle}) => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

  const toggleHamburgerVisibility = () => {
    setIsHamburgerVisible(!isHamburgerVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsHamburgerVisible(false); // Hide hamburger menu on larger screens
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // const [showTitle, setShowTitle] = useState(false);
  // console.log(showTitle)
  return (
    <div className="flex fixed flex-row z-20 justify-between items-center bg-orange-300 p-1 top-0 w-full min-w-screen max-w-screen h-1/8">
      <div>
        <button onClick={toggleHamburgerVisibility}>
          <div className="block sm:hidden">
            {isHamburgerVisible ? <RxCross2 className='text-black'></RxCross2> : <RxHamburgerMenu className='text-black'></RxHamburgerMenu>}
          </div>
        </button>
        <Hamburger isVisible={isHamburgerVisible} onClose={toggleHamburgerVisibility}/>
      </div>
      <div className='flex flex-row-reverse lg:flex-row mx-auto items-center justify-center ml-20 lg:ml-2 z-20'>
        <Link href={"/"}>
        <img className="ml-8 lg:m-0 rounded-[100%] w-[5rem] h-[5rem] lg:w-[7.5rem] lg:h-[7.5rem] z-30" src={Logo.src} alt="Logo"/>
        </Link>
        <div className={`transition-all duration-500 ease-in-out items-center justify-center transform ${showTitle ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <Link href={"/"}>
          <h1 className="mr-0 lg:ml-3 font-inknut text-center text-black text-[5vmin] lg:text-[4vmin] font-bold">Purrlicious Boba</h1>
          </Link>
        </div>
      </div>
      
      <div className="z-20 mr-5 hidden sm:flex flex-row justify-between text-center items-center w-[35%] text-[90%] text-black pl-10">
        {/* <NavButton buttontxt='Home' page="/"/> */}
        <NavButton buttontxt='Our Boba' page="/boba"/>
        <NavButton buttontxt='About Us' page="/about"/>
        <NavButton buttontxt='Contact Us' page="/contact"/>
        <NavButton buttontxt='Join our Newsletter' page="/newsletter"/>
        {/* <div className="bg-[#FFB7CE] pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] rounded-3xl"><Link href={"/newsletter"}>Join Our Newsletter</Link></div> */}
      </div>
    </div>
  );
};

export default Nav;