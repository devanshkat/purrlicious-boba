import React from 'react';
import Button from "./Button";

interface TextImageProps {
    head: string;
    content: string;
    buttontxt: string;
    image: string;
    orientation: number;
    fontSize: string;
    page: string;
}

const TextImage : React.FC<TextImageProps> = ({head, content, buttontxt, image, orientation, fontSize, page}) => {

    return (
        <div className={`flex min-w-full justify-evenly m-1 ${orientation === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <img className="w-[100%] lg:w-[100vmin] min-h-full lg:h-[75vmin] ml-1 mr-1" src={image}/>
            <div className='flex flex-col justify-center items-center w-[100%] lg:w-[50%] m-1'>
                <h1 className={"text-[6vmin] text-center font-bold text-black lg:w-[100%]"}>{head}</h1>
                <p className='flex text-center text-black text-[3vmin] w-[100%] lg:w-[60%]'>{content}</p>
                <Button buttontxt={buttontxt} page={page}/>
            </div>
            
        </div>
    );

};

export default TextImage;