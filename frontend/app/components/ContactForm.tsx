import React from 'react';
import Button from "./Button";

const ContactForm = () => {
    return ( 
        <div className="rounded-lg flex flex-col justify-between bg-white p-4 gap-[3rem]">
            <div className="flex flex-col gap-[1rem] w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">First Name:</p>
                <input className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input>
            </div>
            <div className="flex flex-col gap-[1rem] w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">Last Name:</p>
                <input className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input>
            </div>
            <div className="flex flex-col gap-[1rem] w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">Email:</p>
                <input className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input>
            </div>
            <div className="flex flex-col gap-[1rem] w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">Message:</p>
                <input className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input>
            </div>
        </div>
    );
};

export default ContactForm;