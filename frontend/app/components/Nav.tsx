
import React from 'react';
import Logo from "../../public/Images/PLogo.png";
import Link from "next/link";
import NavButton from "./NavButton";
"use-client";
import {useState, useEffect} from "react";


interface NavProps {
  showTitle: Boolean;
}

const Nav: React.FC<NavProps> = ({showTitle}) => {
  // const [showTitle, setShowTitle] = useState(false);
  // console.log(showTitle)
  return (
    <div className="flex fixed flex-row z-10 justify-between items-center bg-orange-300 p-4 top-0 w-full h-1/8">
      <div className='flex flex-row items-center justify-center'>
        <Link href={"/"}>
        <img className="rounded-[3.5rem]" src={Logo.src} alt="Logo" width={"110rem"} height={"110rem"}/>
        </Link>
        <div className={`transition-all duration-500 ease-in-out transform ${showTitle ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <h1 className="ml-5 font-inknut text-center text-black text-[3vmin] font-bold">Purrlicious Boba</h1>
        </div>
      </div>
      
      <div className="flex flex-row justify-between text-center items-center w-[40%] text-[90%] text-black">
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