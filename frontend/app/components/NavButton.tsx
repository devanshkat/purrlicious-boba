import React from 'react';
import Logo from "../../public/Images/logo.png";
import Link from "next/link"

interface NavButtonProps {
    buttontxt: string;
    page: string;
}

const NavButton : React.FC<NavButtonProps> = ({buttontxt, page}) => {
  return (
    <Link href={page}>
    <div className="text-[2vmin] text-center font-bold text-black border-b-2 border-transparent transition-all duration-500 ease-in-out hover:border-black focus:border-black"
        style = {{
            transform: 'scaleY(1.25)'
        }}
    >{buttontxt}</div>
    </Link>
  );
};

export default NavButton;