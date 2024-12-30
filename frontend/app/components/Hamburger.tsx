'use client'
import React, { useState } from 'react';
import NavButtonMobile from "./NavButtonMobile";
// import { RxCross2 } from "react-icons/rx";

interface HamburgerProps {
    onClose: () => void;
    isVisible: Boolean;
  }

const Hamburger: React.FC<HamburgerProps> = ({onClose, isVisible}) => {
    const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

    const toggleHamburgerVisibility = () => {
        setIsHamburgerVisible(!isHamburgerVisible);
    };
    
    return (
        <div className={`fixed h-[75%] transfrom transtion-all transtion-opacity transtion-transfrom duration-[900ms] ease-in-out left-0 w-full h-3/7 bg-orange-300 z-20 ${ isVisible ? 'translate-y-[0rem] opacity-100' : '-translate-y-[55rem] opacity-0'}`}>
            {/* <button onClick={onClose}>
                <h2 className='text-white'>Hamburger</h2>
            </button> */}
            <div className={`flex flex-col pb-[20%] mt-[5%] mb-[5%] transition-all duration-[200ms] delay-[100ms] ease-out justify-evenly text-center items-center h-[100%] text-[90%] text-black ${isVisible ? "opacity-100" : "opacity-0"}`}>
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
