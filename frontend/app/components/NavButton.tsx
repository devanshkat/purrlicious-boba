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
      <div className="text-[2vmin] p-1 text-center font-bold text-black border-b-2 border-transparent
      transition-all duration-500 ease-in-out relative after:content-[''] after:absolute after:left-0 
      after:bottom-0 after:h-[3px] after:w-full after:bg-orange-600 after:scale-x-0 after:origin-center after:transition-transform after:duration-500 hover:after:scale-x-100"
          style = {{
              transform: "scaleY(1.25)"
          }}
      >{buttontxt}</div>
    </Link>
  );
};

export default NavButton;