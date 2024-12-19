"use client";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Table from "../../public/Images/purrlicious_tabling.png";
import Button from "./components/Button";
import { useState, useEffect } from "react";
const axios = require("axios");

export default function UnsubscribePage() {
    const [email, setEmail] = useState("");

    async function unsubscribeFromNewsletter(e:any) {
        // let response = await fetch("/api/unsubsribe", {
        //     method: "PUT",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({ email }),
        //   });
      
        //   if (response.ok) {
        //     console.log('Email successfully submitted!');
        //   } else {
        //     console.error('Error submitting email');
        //     console.log()
        //   }
        let data = {
            email: email,
        }
        axios.put("/api/unsubscribe", data).then((response:any) => {
            console.log(response.data);
        })
        .catch((error:any) => {
            console.log(error.message);
        })

        // console.log("RUNNINM")
    }

    return (
        <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav showTitle={true} />
      </div>

      <div className="flex flex-col items-center p-4 space-y-6 mt-24 lg:mt-40">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">
          We will miss you!
        </h1>
        {/* <img src={Table.src} alt="" width={"650px"}></img> */}
      </div>
      <div className="flex flex-row items-center justify-center space-x-1">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="
          w-[80%]     
          md:w-[20vw]  
          h-[5vh]    
          md:h-[7vh]  
          rounded-[5em] 
          outline-none 
          text-black 
          p-4    
          ml-4
          sm:pl-6    
        "
          type="text"
          id="email"
          placeholder="Enter your email"
        />
        <Button
          onClick={unsubscribeFromNewsletter}
          buttontxt="Unsubscribe"
          page="/unsubscribe"
        />
      </div>

      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    )
}