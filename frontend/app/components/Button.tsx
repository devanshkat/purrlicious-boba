import React from 'react';
import Logo from "../../public/Images/logo.png";

interface ButtonProps {
    buttontxt: string;
}

const Button : React.FC<ButtonProps> = ({buttontxt}) => {
  return (
    <div className="flex justify-center w-[12rem] bg-[#FFB7CE] p-3 rounded-[0.25em] text-black font-bold m-5">{buttontxt}</div>
  );
};

export default Button;