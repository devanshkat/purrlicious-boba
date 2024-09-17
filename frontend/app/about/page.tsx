import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Button from "../components/Button"
import EmployeeList from "./components/EmployeeList"
import Cat1 from "../../public/Images/purrlicious_cats_1.png"
import Cat2 from "../../public/Images/purrlicious_cats_2.png"
import Pusheen from "../../public/Images/pusheen.png"
import CharChar from "../../public/Images/char-char.png"
import defaultImage from "../../public/Images/PLogo.png"
import TextImage from "./components/TextImage"


export default function AboutPage() {

    let employeeList= [
        {
            "Image": Pusheen.src,
            "Name": "Pusheen",
            "Title": "Pawblic Relations Officer",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": CharChar.src,
            "Name": "Char-Char",
            "Title": "Chief Furnancial Officer",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Name": "Lynn Prasai",
            "Title": "Co-founder",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Name": "Alex",
            "Title": "Cofounder",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Name": "John Doe",
            "Title": "Employee",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Name": "John Doe",
            "Title": "Employee",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
    ]

    return (
    <div className="flex flex-col h-full min-w-screen w-full bg-[#FED8B1]">
      <div className="mb-5">
      <Nav showTitle={true}/>
      </div>

      <div className="flex flex-col items-center mt-28 lg:mt-40">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">About Us</h1>
      </div>
      
      <div className="flex flex-col items-center m-10 ">
        
        <TextImage 
        content="At Purrlicious Boba, we’re more than just a place to grab a drink—we're dedicated to bring everyone 
        joy through delicious  boba teas and the love of animals. Here, you can sip on our homemade crafted boba tea while enjoying 
        the company of our friendly  cats. We believe that spending time with animals can uplift spirits and improve mental well-being.
        So we’ve created a space where you can relax, unwind, and let our furry friends brighten your day. Our goal is to spread happiness,
        one boba and one purr at a time."
        image={Cat1.src}
        orientation={0}
        fontSize={"3"}/>

        <TextImage 
        content="Purrlicious Boba started from our love for both cats and boba. As a college students majoring in 
        business, we saw an opportunity to combine our passions into something special. What began as a fun idea has grown into a unique way 
        to bring joy to others through delicious boba drinks and the companionship of cats. Our ultimate goal is to expand Purrlicious Boba 
        into a full cat café, where customers can enjoy their favorite drinks while relaxing with furry friends."
        image={Cat2.src}
        orientation={1}
        fontSize={"3"}/>

      </div>

      {/* Images

      <div className="flex flex-row items-center justify-between p-3 w-full max-w-6xl mx-auto">
        <img src={Cat1.src} alt="" width={"512rem"} height={"800rem"} />
        <img src={Cat2.src} alt="" width={"512px"} height={"350px"}/>
      </div> */}
      
      {/* Employee Page */}
      
      <div className="flex flex-col items-center justify-center p-0 lg:p-5 w-full max-w-screen mx-auto">
        <EmployeeList emList={employeeList}/>
      </div>
      
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}