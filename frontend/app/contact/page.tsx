import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Logo from "../../public/Images/PLogo.png";
import ContactForm from "../components/ContactForm"


export default function ContactPage() {
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav />
      </div>

      <div className="flex flex-col items-center p-4">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Contact Us</h1>
        <h2 className="font-inknut text-center text-[#2C2C2C] text-[2em] font-regular">For Business Inquiries: Catering, Events, and More</h2>
      </div>

      <div className="flex flex-row items-center m-[10rem] justify-center gap-[15rem]">
        <img src={Logo.src} alt="Logo" width={"440rem"} height={"440rem"}/>
        <ContactForm/>
      </div>
      
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}