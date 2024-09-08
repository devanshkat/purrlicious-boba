import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Button from "../components/Button"
import EmployeeList from "../components/EmployeeList"
import Cat1 from "../../public/Images/purrlicious_cats_1.png"
import Cat2 from "../../public/Images/purrlicious_cats_2.png"
import defaultImage from "../../public/Images/PLogo.png"


export default function AboutPage() {

    let employeeList= [
        {
            "Image": defaultImage.src,
            "Title": "Manager",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Title": "Employee",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Title": "CEO",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Title": "Employee",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Title": "Hiring Manager",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
        {
            "Image": defaultImage.src,
            "Title": "Employee",
            "Desc": `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua.,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.`
        },
    ]

    return (
    <div className="flex flex-col h-full min-w-screen w-full bg-[#FED8B1]">
      <div className="">
        <Nav />
      </div>

      <div className="flex flex-col items-center p-4">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">About Us</h1>
      </div>

      {/* Images */}

      <div className="flex flex-row items-center justify-between p-10 w-full max-w-6xl mx-auto">
        <img src={Cat1.src} alt="" width={"512rem"} height={"800rem"} />
        <img src={Cat2.src} alt="" width={"512px"} height={"350px"}/>
      </div>
      
      {/* Employee Page */}
      
      <div className="flex flex-col items-center justify-center p-10 w-full max-w-6xl mx-auto">
        <EmployeeList emList={employeeList}/>
      </div>
      
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}