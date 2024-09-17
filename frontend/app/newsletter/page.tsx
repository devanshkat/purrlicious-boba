"use client";
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Table from "../../public/Images/purrlicious_tabling.png"
import Button from "./components/Button"
import TextImage from ".././components/TextImage"
import {useState, useEffect} from "react";


export default function NewsletterPage() {
  const [email, setEmail] = useState("");
    async function signUpEmail(e: any) {
      let response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email })
      })
    }

<<<<<<< Updated upstream
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
=======
  return (
    <div className="flex flex-col min-w-screen min-h-screen w-screen h-auto bg-[#FED8B1]">
>>>>>>> Stashed changes
      <div className="">
        <Nav showTitle={true}/>
      </div>

      <div className="flex flex-col items-center p-4 space-y-6 mt-40">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Join our Newsletter</h1>
        <img src={Table.src} alt="" width={"650px"}></img>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1">
        <input onChange={ (e) => setEmail(e.target.value)} className="w-[25vw] h-[7vh] rounded-[5em] outline-none text-black pl-6" type={"text"} id="email" placeholder="Enter your email"></input>
        <Button onClick={signUpEmail} buttontxt="Get Notified!" page="/newsletter"/>
      </div>
      
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}