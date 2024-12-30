"use client";
import React from 'react';
import Button from "../../components/Button";
import {useState} from "react";

const ContactForm = () => {
    // Form values
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    // Gmail credentials

    function testEmail() {
        fetch("/api/email")
        .then(response => response.json())
        .then(res => console.log(res));
    }

    // Sends email to purrliciousboba
    async function contactUs() {
        try {
            let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName, email, message }),
          });
          
        //   setSuccess(response.ok);
        //   setIsPopupVisible(true);
    
        } catch (error) {
        //   setSuccess(false);
        //   setIsPopupVisible(true);
        }
    }
    
    
    return ( 
        <div className="rounded-lg flex flex-col justify-between bg-white p-4 gap-[3rem]">
            <div className="flex flex-col gap-[1rem] w-full sm:w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">First Name:</p>
                <input onChange={(e) => setFirstName(e.target.value)} className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input>
            </div>
            <div className="flex flex-col gap-[1rem] w-full sm:w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">Last Name:</p>
                <input onChange={(e) => setLastName(e.target.value)} className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input>
            </div>
            <div className="flex flex-col gap-[1rem] w-full sm:w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">Email:</p>
                <input onChange={(e) => setEmail(e.target.value)} className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input>
            </div>
            <div className="flex flex-col gap-[1rem] w-full sm:w-[30vw]">
                <p className="flex font-inknut text-left text-black text-[1em] font-regular">Message:</p>
                {/* <input className="flex outline-none p-2 text-black border-b-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400" type="text" name="name" placeholder="Value"></input> */}
                <textarea onChange={(e) => setMessage(e.target.value)} className='rounded-[0.5em] min-h-[25vh] max-h-[60vh] flex outline-none p-2 text-black border-2 transition-all duration-500 ease-in-out hover:border-orange-400 focus:border-orange-400' name="" id=""></textarea>
            </div>
            <div className="flex justify-center">
                {/* <Button buttontxt="Contact Us" page="#" /> */}
                <div onClick={contactUs} className="flex justify-center items-center text-[3vmin] lg:text-[2vmin] text-center w-[30vw] lg:w-[15vw] lg:h-[7vh] bg-[#FFB7CE] p-3 rounded-[0.25em] text-black font-bold m-5 transition-rotate transition-colors duration-500 ease-in-out hover:bg-orange-400 hover:text-white cursor-pointer">Contact Us</div>
            </div>
        </div>
    );
};

export default ContactForm;