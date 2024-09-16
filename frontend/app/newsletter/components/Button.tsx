import React from "react";
import Logo from "../../public/Images/logo.png";
import Link from "next/link";

interface ButtonProps {
  buttontxt: string;
  page: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({ buttontxt, page, onClick }) => {
  return (
    <Link href={page}>
      <div
        onClick={onClick}
        className="
          flex justify-center 
          items-center 
          text-[4vmin]          
          md:text-[2vmin]      
          text-center 
          w-[35vw]
          md:w-[10vw]           
          h-[5.5vh]             
          md:h-[7vh]           
          bg-[#FFB7CE] 
          p-4                  
          md:p-3             
          rounded-[2em] 
          text-black font-bold 
          m-3                 
          md:m-5             
          transition-rotate 
          transition-colors 
          duration-500 
          ease-in-out 
          hover:bg-orange-400 
          hover:text-white 
          cursor-pointer
        "
      >
        {buttontxt}
      </div>
    </Link>
  );
};

export default Button;
