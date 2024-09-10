import React from 'react';
import Logo from "../../public/Images/logo.png";
import Link from "next/link"

interface ButtonProps {
    buttontxt: string;
    page: string;
}

const Button : React.FC<ButtonProps> = ({buttontxt, page}) => {
  return (
    <Link href={page}>
    <div className="flex justify-center items-center text-[2vmin] text-center w-[15vw] h-[7vh] bg-[#FFB7CE] p-3 rounded-[0.25em] text-black font-bold m-5 transition-rotate transition-colors duration-500 ease-in-out hover:bg-orange-400 hover:text-white cursor-pointer">{buttontxt}</div>
    </Link>
  );
};

export default Button;