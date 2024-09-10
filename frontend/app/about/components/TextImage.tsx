import React from 'react';
import Button from "../../components/Button";

interface TextImageProps {
    content: string;
    image: string;
    orientation: number;
    fontSize: string;
}

const TextImage : React.FC<TextImageProps> = ({content, image, orientation, fontSize}) => {

    return (
        <div className={`flex min-w-full justify-evenly  m-5 ${orientation === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <img className=" w-[80vmin] h-[75vmin]" src={image}/>
            <div className=''></div>
            <div className='flex flex-col justify-center items-center w-[50%]  '>
                
                <p className='flex text-center text-black text-[3.3vmin] w-[78%]'>{content}</p>
            </div>
            
        </div>
    );

};

export default TextImage;