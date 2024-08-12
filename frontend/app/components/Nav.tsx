import React from 'react';
import Logo from "../../public/Images/logo.png";

const Nav = () => {
  return (
    <div className="flex fle-row justify-between items-center bg-orange-300 p-4 fixed top-0 w-full h-1/8">
      <img src={Logo.src} alt="Logo" width={96} height={96}/>
      <div className="flex flex-row justify-between items-center w-1/3 text-black">
        <div>Home</div>
        <div>About Us</div>
        <div>Our Boba</div>
        <div>Contact Us</div>
        <div className="bg-[#FFB7CE] p-[0.15rem] rounded-3xl">Join Our Newsletter</div>
      </div>
      
    </div>
  );
};

export default Nav;