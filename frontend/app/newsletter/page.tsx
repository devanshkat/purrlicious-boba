import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Table from "../../public/Images/purrlicious_tabling.png"
import Button from "./components/Button"
import TextImage from ".././components/TextImage"


export default function NewsletterPage() {
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav />
      </div>

      <div className="flex flex-col items-center p-4 space-y-6">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Join our Newsletter</h1>
        <img src={Table.src} alt="" width={"650px"}></img>
      </div>
      <div className="flex flex-row items-center justify-center space-x-1">
        <input className="w-[25vw] h-[7vh] rounded-[5em] outline-none text-black pl-6" type={"text"} id="email" placeholder="Enter your email"></input>
        <Button buttontxt="Get Notified!" page="/newsletter"/>
      </div>
      
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}