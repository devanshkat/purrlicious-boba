'use client'
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

interface HamburgerProps {
    onClose: () => void;
  }

const Hamburger: React.FC<HamburgerProps> = ({onClose}) => {
    const [isHamburgerVisible, setIsHamburgerVisible] = useState(false);

    const toggleHamburgerVisibility = () => {
        setIsHamburgerVisible(!isHamburgerVisible);
    };
    
    return (
        <div className="fixed mt-11 left-0 w-full h-full bg-orange-300 z-50">
            <button onClick={onClose}>
                <h2 className='text-white'>Hamburger</h2>
            </button>
        </div>
    );
};

export default Hamburger;
