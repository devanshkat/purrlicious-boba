"use client";
import react from "react";
import {useState} from "react";

export default function Unsubscribe() {

    const [email, setEmailInput] = useState("");

    async function Unsubscribe() {
        let response = await fetch("/api/unsubscribe", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        });
    }

    
    return (
        <div className="flex flex-row justify-center items-center text-black ">
            <input onChange={(e) => {setEmailInput(e.target.value)}} type="text" />
            <button className="text-white m-5" onClick={Unsubscribe}>Unsubscribe</button>
        </div>
    );
}