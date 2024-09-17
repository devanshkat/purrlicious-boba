import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Logo from "../../public/Images/PLogo.png";
import ContactForm from "./components/ContactForm"


export default function ContactPage() {
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav showTitle={true}/>
      </div>

      <div className="flex flex-col items-center p-4 mt-40">
        <h1 className="font-inknut text-center text-black text-[2em] sm:text-[3.8em] font-bold">Contact Us</h1>
        <h2 className="font-inknut text-center text-[#2C2C2C] text-[1em] sm:text-[2em] font-regular">For Business Inquiries: Catering, Events, and More</h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center m-[2rem] sm:m-[4rem] justify-center gap-[2rem] sm:gap-[15rem]">
        <img src={Logo.src} alt="Logo" className="w-5/6 sm:w-1/3"/>
        <div className="w-full sm:w-auto"> 
          <ContactForm/>
        </div>
      </div>
      
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}