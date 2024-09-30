import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs"
import {useState, useEffect} from "react"
import next from "next";
interface ImageData {
    src: string;
    alt: string;
}
interface CarosellProps {
    data: Array<ImageData>;
}




const Carosell : React.FC<CarosellProps> = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide == data.length-1 ? 0 : slide + 1);
    }

    const previousSlide = () => {
        setSlide(slide == 0 ? data.length-1 : slide - 1);
    }

    useEffect(() => {
        const intId = setInterval(nextSlide, 3000);
        return () => clearInterval(intId)
    })


    return (
        <div className="flex justify-center items-center w-[80vw] h-[30rem] xl:w-[30vw] xl:h-[45rem] relative m-5">
            <BsArrowLeftCircleFill className="absolute w-[2rem] h-[2rem] text-white left-1 filter drop-shadow hover:cursor-pointer bg-black rounded-[100%]" onClick={previousSlide}/>
            {data.map((item,idx) => {
                return <img className={slide === idx ? "rounded-[0.5em] shadow w-[100%] h-[100%]" : "hidden"} src={item.src} alt={item.alt} key={idx}/>
            })}
            <BsArrowRightCircleFill className="absolute w-[2rem] h-[2rem] text-white right-1 filter drop-shadow hover:cursor-pointer bg-black rounded-[100%]" onClick={nextSlide}/>
            <span className="flex absolute bottom-[1rem] ">
                {data.map((_, idx) => {
                    return <button className={slide === idx ? "bg-white h-[0.5rem] w-[0.5rem] rounded-[100%] outline-none border-none shadow m-[0.2rem]" : 
                        "bg-gray-300 h-[0.5rem] w-[0.5rem] rounded-[100%] outline-none border-none shadow m-[0.2rem]" } 
                        key={idx} onClick={() => {setSlide(idx)}}></button>
                })}
            </span>
        </div>
    );
}

export default Carosell;