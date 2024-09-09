"use client"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import BobaCard from './components/BobaCard';
import boba1 from "../../public/Images/BobaTea.jpg"

export default function OurBobaPage() {
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav />
      </div>
      <div className="flex flex-col items-center p-4">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Our Boba</h1>
        <p className="text-[#757575] text-[1.6em]">Explore our selection</p>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center">
        <BobaCard name="Thai Milk Tea" price="5.00" imageloc={boba1.src} description= "Thai Milk"></BobaCard>
        <BobaCard name="Thai Green Tea" price="5.00" imageloc={boba1.src} description= "Thai Green"></BobaCard>
        <BobaCard name="Taro Milk Tea" price="5.00" imageloc={boba1.src} description= "Taro"></BobaCard>
        <BobaCard name="Strawberry Milk Tea" price="5.00" imageloc={boba1.src} description= "Strawberry"></BobaCard>
        <BobaCard name="Ube Milk Tea" price="5.00" imageloc={boba1.src} description= "Ube"></BobaCard>
      </div>
    
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}
