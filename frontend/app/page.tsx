"use client"; 
import {useState, useEffect} from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Button from "./components/Button"
import TextImage from "./components/TextImage"
import BobaImage from "../public/Images/BobaTea.jpg"
import Cat1 from "../public/Images/purrlicious_cats_2.jpg"
import Cat2 from "../public/Images/char-char1.png"
import Carosell from "./components/Carosell"
import Events from "./components/Events"
import img1 from "../public/Images/Carousel1.png"
import img2 from "../public/Images/Carousel2.png"
import img3 from "../public/Images/Carousel3.png"
import img4 from "../public/Images/Carousel4.png"
import { TypeAnimation } from 'react-type-animation';
// import img5 from "../public/Images/Carousel5.png"

export default function Home() {

  const [title, setShowTitle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [eventData, setEventData] = useState([]);
  
  
  function getCalendarData() {
    const data = fetch("/api/calendar")
                .then(response => response.json())
                .then(data => {
                  setEventData(data);
                })
                .catch(error => {
                  console.log(error)
                })
    
  }
  


  useEffect(() => {
    getCalendarData();

    const handleScroll = () => {
      if (window != undefined) {
        const position = window.scrollY;
        setScrollPosition(position);
        if (position >= 248) {
          setShowTitle(true);
        }
        else {
          setShowTitle(false);
        }
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  let carosellData = [
    {
      src: img1.src,
      alt: "Image 1"
    },
    {
      src: img2.src,
      alt: "Image 2"
    },
    {
      src: img3.src,
      alt: "Image 3"
    },
    {
      src: img4.src,
      alt: "Image 4"
    },
    // {
    //   src: img5.src,
    //   alt: "Image 5"
    // }
  ]
    const [currentRange, setCurrentRange] = useState<number[]>([0, 1, 2]);
    const [incTrig, setIncTrig] = useState(0);
    const [decTrig, setDecTrig] = useState(0);
    const [rotatedData, setRotatedData] = useState( [
      {
        src: img1.src,
        alt: "Image 1"
      },
      {
        src: img2.src,
        alt: "Image 2"
      },
      {
        src: img3.src,
        alt: "Image 3"
      },
      {
        src: img4.src,
        alt: "Image 4"
      },
      // {
      //   src: img5.src,
      //   alt: "Image 5"
      // }
    ]);

  useEffect(() => {
      let newData = [...rotatedData];
      let first = newData[0];
      newData.shift();
      newData.push(first);
      setRotatedData(newData)
  }, [incTrig]); 

  useEffect(() => {
      let newData = [...rotatedData];
      let last = newData[newData.length-1];
      newData.pop();
      newData.unshift(last);
      setRotatedData(newData);
   }, [decTrig]); 

  return (
    
    <div className="flex flex-col min-w-screen min-h-screen h-[100%] w-[100%] bg-orange-100">
        
      <div className="flex flex-col items-center bg-orange-300">
        <Nav showTitle={title}/>
        <div className="mt-[7em] xl:mt-[10em] flex flex-col items-center">
          <h1 className="font-inknut text-center text-black text-[2.7em] xl:text-[3.8em] font-bold">Purrlicious Boba</h1>
          <div className="font-inter text-[#757575] text-[1.5em] text-center font-bold w-[70%]">
            {/* the first boba cat cafe in davis */}
          <TypeAnimation
            sequence={[
              // Enter Substrings for the typewrite to cycle through
              'The best boba cat cafe.',
              2000, //delay
              "The best price.",
              2000,
              "The best experience.",
              2000,
            ]}
            wrapper="span"
            speed={1}
            style={{fontFamily: "Inter"}}
            repeat={Infinity}
          />
          </div>
          <Button buttontxt="Explore our Drinks!" page="/boba"/>
        </div>
       
      </div>
      <div className="flex justify-center text-center items-center text-black w-full overflow-x-hidden">
        <Carosell data={rotatedData} />
        {/* <Carosell data={rotatedData} currentRange={currentRange} incrementTrigger={ incTrig} setIncrementTrigger={setIncTrig} decrementTrigger={decTrig} setDecrementTrigger={setDecTrig}/> */}
      </div>
      <div>
        <Events events={eventData}/>
      </div>
      <div className="flex flex-col items-center m-2 xl:m-10">
        
        <TextImage 
        head="What is Purrlicious?" 
        content="At Purrlicious, we serve affordable, high-quality boba tea and offer experiences with our adorable kittens."
        buttontxt="Learn More about Us"
        page="/about"
        image={Cat1.src}
        orientation={0}
        fontSize={"1.8"}/>

        <TextImage 
        head="Want to stay in the loop?" 
        content="Sign up to get updates of when you can find us at festivals and events!"
        buttontxt="Join our Newsletter"
        page="/newsletter"
        image={Cat2.src}
        orientation={1}
        fontSize={"1.8"}/>

        
      </div>
      <div className="mt-auto w-full">
        <Footer />
      </div>

      <script src="https://smtpjs.com/v3/smtp.js">
      </script>
    </div>
    
  );
}

