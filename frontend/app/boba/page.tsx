"use client"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import BobaCard from './components/BobaCard';
import boba1 from "../../public/Images/BobaTea.jpg"

export default function OurBobaPage() {
    return (
    <div className="flex flex-col min-w-screen min-h-screen w-full h-full bg-[#FED8B1]">
      <div className="">
        <Nav showTitle={true}/>
      </div>
      <div className="flex flex-col items-center p-4">
        <h1 className="font-inknut text-center text-black text-[3.8em] font-bold">Our Boba</h1>
        <p className="text-[#757575] text-[1.6em]">Explore our selection</p>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center">
        <BobaCard name="Thai Milk Tea" price="5.00" imageloc={boba1.src} description= "Ingredients: Water, Sugar, Thai Tea Mix (Tea, Food Coloring [Yellow 6]), Sweetened Condensed Milk (Milk, Sugar), Evaporated Milk (Milk, Dipotassium Phosphate, Carrageenan, Vitamin D3), Half-and- Half (Milk, Cream), Natural and Artificial Flavorings"></BobaCard>
        <BobaCard name="Thai Green Tea" price="5.00" imageloc={boba1.src} description= "Ingredients: Water, Sugar, Thai Green Tea Mix (Green Tea, Food Coloring [Blue 1, Yellow 5]), Sweetened Condensed Milk (Milk, Sugar), Evaporated Milk (Milk, Dipotassium Phosphate, Carrageenan, Vitamin D3), Half-and-Half (Milk, Cream), Natural and Artificial Flavorings"></BobaCard>
        <BobaCard name="Taro Milk Tea" price="5.00" imageloc={boba1.src} description= "Sweetended taro non-dairy creamer powder (sugar, glucose syrup, Hydrogenated palm kernel oil, Whey (milk), Taro powder, artificial flavors, maltodextrin, sodium caseinate, silicon dioxide, Dipotassium phosphate, tripotassium phosphate, mono & diglyceride, sodium tripolyphosphate, diacetyl tartaric acid esters of mono & diglycerides (Datem), Beta carotene (color), suctalose, blue 1, red 3, red 40."></BobaCard>
        <BobaCard name="Strawberry Green Tea" price="5.00" imageloc={boba1.src} description= "Strawberry"></BobaCard>
        <BobaCard name="Ube Milk Tea" price="5.00" imageloc={boba1.src} description= "Ube"></BobaCard>
      </div>
    
      <div className="mt-auto h-full w-full">
        <Footer />
      </div>
    </div>
    );
}
