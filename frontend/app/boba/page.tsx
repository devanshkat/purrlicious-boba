"use client"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import BobaCard from './components/BobaCard';
import thai from "../../public/Images/thai.jpg"
import green from "../../public/Images/green.jpg"
import taro from "../../public/Images/taro.jpg"
import mango from "../../public/Images/mango.jpg"
import strawberry from "../../public/Images/strawberry.jpg"
import ube from "../../public/Images/ube.jpg"

export default function OurBobaPage() {
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav showTitle={true}/>
      </div>
      <div className="flex flex-col items-center p-4 mt-36">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Our Boba</h1>
        <p className="text-[#757575] text-[1.6em]">Explore our selection</p>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center">
        <BobaCard name="Thai Milk Tea" price="5.00" imageloc={thai.src} description= "Ingredients: Water, Sugar, Thai Tea Mix (Tea, Food Coloring [Yellow 6]), Sweetened Condensed Milk (Milk, Sugar), Evaporated Milk (Milk, Dipotassium Phosphate, Carrageenan, Vitamin D3), Half-and- Half (Milk, Cream), Natural and Artificial Flavorings" fontSize={1.7}></BobaCard>
        <BobaCard name="Thai Green Tea" price="5.00" imageloc={green.src} description= "Ingredients: Water, Sugar, Thai Green Tea Mix (Green Tea, Food Coloring [Blue 1, Yellow 5]), Sweetened Condensed Milk (Milk, Sugar), Evaporated Milk (Milk, Dipotassium Phosphate, Carrageenan, Vitamin D3), Half-and-Half (Milk, Cream), Natural and Artificial Flavorings" fontSize={1.7}></BobaCard>
        <BobaCard name="Taro Milk Tea" price="5.00" imageloc={taro.src} description= "Sweetended taro non-dairy creamer powder (sugar, glucose syrup, Hydrogenated palm kernel oil, Whey (milk), Taro powder, artificial flavors, maltodextrin, sodium caseinate, silicon dioxide, Dipotassium phosphate, tripotassium phosphate, mono & diglyceride, sodium tripolyphosphate, diacetyl tartaric acid esters of mono & diglycerides (Datem), Beta carotene (color), suctalose, blue 1, red 3, red 40." fontSize={1.7}></BobaCard>
        <BobaCard name="Mango Green Tea" price="5.00" imageloc={mango.src} description= "Mango" fontSize={1.7}></BobaCard>
        <BobaCard name="Strawberry Green Tea" price="5.00" imageloc={strawberry.src} description= "Strawberry" fontSize={1.6}></BobaCard>
        <BobaCard name="Ube Milk Tea" price="5.00" imageloc={ube.src} description= "Ube" fontSize={1.7}></BobaCard>
      </div>
    
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}
