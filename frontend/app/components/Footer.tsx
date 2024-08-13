import React from 'react';
import Logo from "../../public/Images/logo.png";
import InstagramIcon from "../../public/Images/insta.png";
import TiktokIcon from "../../public/Images/tiktok.svg";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-orange-300 p-4 bottom-0 w-full h-1/8">
      <img src={Logo.src} alt="Logo" width={96} height={96} />

      <div className="flex flex-row items-center space-x-4">
        <a href="https://www.instagram.com/purrliciousboba/" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon.src} alt="Instagram" className="w-7 h-7 cursor-pointer" />
        </a>

        <a href="https://www.tiktok.com/@purrliciousboba?_t=8mqYZRz8x9X&_r=1" target="_blank" rel="noopener noreferrer">
        <img src={TiktokIcon.src} alt="Tiktok" className="w-8 h-7 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
