// import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
// import {useState, useEffect} from "react"
// import next from "next";
// interface ImageData {
//     src: string;
//     alt: string;
// }
// interface CarosellProps {
//     data: Array<ImageData>;
//     currentRange: number[];
//     incrementTrigger: number;
//     decrementTrigger: number;
//     setIncrementTrigger: Function;
//     setDecrementTrigger: Function;
// }




// const Carosell : React.FC<CarosellProps> = ({data, currentRange, incrementTrigger, setIncrementTrigger, decrementTrigger, setDecrementTrigger}) => {
//     const [slide, setSlide] = useState(1);

//     const nextSlide = () => {
//         setIncrementTrigger(incrementTrigger + 1);        
//     }

//     const previousSlide = () => {
//         setDecrementTrigger(decrementTrigger + 1);
//     }

//     // useEffect(() => {
//     //     const intId = setInterval(nextSlide, 3000);
//     //     return () => clearInterval(intId)
//     // })


//     return (
//         <div className="flex justify-center items-center w-[35%] h-[60%] md:w-[80vw] md:h-[30rem] xl:w-[30vw] xl:h-[45rem] relative m-5">
//             <BsArrowLeftCircleFill className="absolute z-10 -left-[110%] xl:-left-[30%] w-[3rem] h-[3rem] m-4 text-white filter drop-shadow hover:cursor-pointer bg-black rounded-[100%]" onClick={previousSlide}/>
//             {data.map((item,idx) => {
//                 return <img className={`
//                     ${currentRange.includes(idx) ? "rounded-[0.5em] shadow opacity-100  w-[85%] h-[85%]" : "hidden"} m-2 z-1 transition-all duration-300 ease-in-out 
//                     ${idx == 1 ? "scale-100" : "scale-75"} `} 
//                     src={item.src} alt={item.alt} key={idx}/>
//             })}
//             <BsArrowRightCircleFill className="absolute z-2 -right-[110%] xl:-right-[30%] w-[3rem] h-[3rem] m-4 text-white filter drop-shadow hover:cursor-pointer bg-black border-2 border-orange-100 rounded-[100%]" onClick={nextSlide}/>
//             {/* <span className="flex absolute bottom-[1rem] z-10">
//                 {data.map((_, idx) => {
//                     return <button className={slide === idx ? "bg-white h-[0.5rem] w-[0.5rem] rounded-[100%] outline-none border-none shadow m-[0.2rem]" : 
//                         "bg-gray-300 h-[0.5rem] w-[0.5rem] rounded-[100%] outline-none border-none shadow m-[0.2rem]" } 
//                         key={idx} onClick={() => {setSlide(idx)}}></button>
//                 })}
//             </span> */}
//         </div>
//     );
// }

// export default Carosell;

import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import {useState} from "react";

interface ImageData {
    src: string;
    alt: string;
}

interface CarosellProps {
    data: Array<ImageData>;
}

const Carosell: React.FC<CarosellProps> = ({data}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % data.length);
    };

    const previousSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + data.length) % data.length);
    };

    const getAdjacentIndices = () => {
        const prevIndex = (currentSlide - 1 + data.length) % data.length;
        const nextIndex = (currentSlide + 1) % data.length;
        return [prevIndex, currentSlide, nextIndex];
    };

    const adjacentIndices = getAdjacentIndices();

    return (
        <div className="flex justify-center items-center w-[35%] h-[60%] md:w-[80vw] md:h-[30rem] xl:w-[30vw] xl:h-[45rem] relative m-5">
            <div className="relative w-full h-full"> {/* Container for images */}
                {adjacentIndices.map((idx, index) => (
                    <img
                        key={idx}
                        src={data[idx].src}
                        alt={data[idx].alt}
                        className={`
                            rounded-[0.5em] shadow opacity-100 transition-all duration-300 ease-in-out transform absolute
                            ${idx === currentSlide ? "scale-100 w-[85%] h-[85%]" : "scale-75 w-[70%] h-[70%]"}
                        `}
                        style={{
                            left: index === 0 ? '-30%' : index === 1 ? '50%' : '130%', //Positioning
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}
            </div>
            <BsArrowLeftCircleFill
                className="absolute z-3 -left-[110%] xl:-left-[30%] w-[3rem] h-[3rem] m-4 text-white filter drop-shadow hover:cursor-pointer bg-black rounded-[100%]"
                onClick={previousSlide}
            />
            <BsArrowRightCircleFill
                className="absolute z-3 -right-[110%] xl:-right-[30%] w-[3rem] h-[3rem] m-4 text-white filter drop-shadow hover:cursor-pointer bg-black border-2 border-orange-100 rounded-[100%]"
                onClick={nextSlide}
            />
        </div>
    );
};

export default Carosell;