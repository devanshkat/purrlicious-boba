import React from 'react';
import Logo from "../../public/Images/PLogo.png";
import Link from "next/link";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-orange-300 p-4 top-0 w-full h-1/8">
      <Link href={"/"}>
      <img className="rounded-[3.5rem]" src={Logo.src} alt="Logo" width={"110rem"} height={"110rem"}/>
      </Link>
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