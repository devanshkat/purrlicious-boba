import React from 'react';
import Logo from "../../public/Images/logo.png";
import Link from "next/link"

interface NavButtonMobileProps {
    buttontxt: string;
    page: string;
}

const NavButtonMobile : React.FC<NavButtonMobileProps> = ({buttontxt, page}) => {
  return (
    <Link href={page}>
    <div className="text-[5vmin] p-5 text-center font-bold text-black border-b-2 border-transparent"
        style = {{
            transform: "scaleX(0.83) scaleY(1)"
        }}
    >{buttontxt}</div>
    </Link>
  );
};

export default NavButtonMobile;