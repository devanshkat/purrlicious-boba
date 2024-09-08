import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Button from "./components/Button"
import TextImage from "./components/TextImage"
import BobaImage from "../public/Images/BobaTea.jpg"

export default function Home() {
  return (
    <div className="flex flex-col h-[100%] w-[100%] bg-orange-100">
      <div className="">
        <Nav />
      </div>
      <div className="flex flex-col items-center bg-orange-300">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Purrlicious Boba</h1>
        <p className="font-inter text-[#757575] text-[1.5em] font-bold">the first boba cat cafe in davis</p>
        <Button buttontxt="Explore our Drinks!"/>
      </div>
      <div className="flex justify-center text-center items-center text-black">
        Image Carosell
      </div>
      <div className="flex flex-col items-center">
        
        <TextImage 
        head="What is Purrlicious?" 
        content="At Purrlicious, we serve affordable, high-quality boba tea and offer experiences with our adorable kittens."
        buttontxt="Learn More about Us"
        image={BobaImage.src}
        orientation={0}
        fontSize={"1.8"}/>

        <TextImage 
        head="Want to stay in the loop?" 
        content="Sign up to get updates of when you can find us at festivals and events!"
        buttontxt="Join our Newsletter"
        image={BobaImage.src}
        orientation={1}
        fontSize={"1.8"}/>

        
      </div>
      <div className="mt-auto w-full">
        <Footer />
      </div>
    </div>
  );
}

