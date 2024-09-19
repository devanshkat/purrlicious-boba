import React from 'react';
import Logo from "../../public/Images/logo.png";
import Link from "next/link"

interface NavButtonMobileProps {
    buttontxt: string;
    page: string;
}

const NavButtonMobile : React.FC<NavButtonMobileProps> = ({buttontxt, page}) => {
  return (
    <div className='flex flex-col items-center'>
        <Link href={page}>
          <div className="text-[5vmin] p-5 text-center font-bold text-black "
              style = {{
                  transform: "scaleX(0.83) scaleY(1)"
              }}
          >{buttontxt}</div>
        </Link>
        <div className='border-2 border-orange-600 w-[15em]'></div>
    </div>
    
  );
};

export default NavButtonMobile;