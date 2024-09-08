import Nav from "../components/Nav"
import Footer from "../components/Footer"


export default function OurBobaPage() {
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav />
      </div>

      <div className="flex flex-col items-center p-4">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Our Boba</h1>
      </div>
      
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}