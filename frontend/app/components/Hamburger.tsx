'use client'
import React, { useState } from 'react';
import NavButtonMobile from "./NavButtonMobile";
// import { RxCross2 } from "react-icons/rx";

interface HamburgerProps {
    onClose: () => void;
  }

const Hamburger: React.FC<HamburgerProps> = ({onClose}) => {
    const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

    const toggleHamburgerVisibility = () => {
        setIsHamburgerVisible(!isHamburgerVisible);
    };
    
    return (
        <div className="fixed transition-all duration-500 ease-in-out left-0 w-full h-2/7 bg-orange-300 z-20">
            {/* <button onClick={onClose}>
                <h2 className='text-white'>Hamburger</h2>
            </button> */}
            <div className="flex-col mt-[5%] mb-[5%] transition-all duration-500 ease-in-out justify-between text-center items-center h-[60%] text-[90%] text-black">
                {/* <NavButton buttontxt='Home' page="/"/> */}
                <NavButtonMobile buttontxt='Our Boba' page="/boba"/>
                <NavButtonMobile buttontxt='About Us' page="/about"/>
                <NavButtonMobile buttontxt='Contact Us' page="/contact"/>
                <NavButtonMobile buttontxt='Join our Newsletter' page="/newsletter"/>
                {/* <div className="bg-[#FFB7CE] pt-[0.2rem] pb-[0.2rem] pl-[0.5rem] pr-[0.5rem] rounded-3xl"><Link href={"/newsletter"}>Join Our Newsletter</Link></div> */}
            </div>
        </div>
    );
};

export default Hamburger;
