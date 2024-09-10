import React from 'react';
import Logo from "../../public/Images/PLogo.png";

interface Employee {
    Image: string;
    Name: string;
    Title: string;
    Desc: string;
}
interface EmployeeProps {
    emp: Employee;
}


const Employee : React.FC<EmployeeProps> = ({emp}) => {
  return (
    <div className="flex max-w-[20em] max-h-[40em] shadow-lg rounded-[0.5em] justify-center items-center w-auto h-auto flex flex-col bg-white p-[2em] m-2">
        <div className='m-2'>
            <img className="rounded-[0.5em]" src={emp.Image} width={"175rem"} height={"175rem"}/>
        </div>
        <div className="text-xl text-black font-bold m-1 ">
            {emp.Name}
        </div>
        <div className='text-black font-bold m-1'>
            {emp.Title}
        </div>
        <div className='text-black text-[0.75em] m-1'>
            {emp.Desc}
        </div>
      
    </div>
  );
};

export default Employee;
