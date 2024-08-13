import React from 'react';
import Button from "./Button";

interface TextImageProps {
    head: string;
    content: string;
    buttontxt: string;
    image: string;
    orientation: number;
    fontSize: number;
}

const TextImage : React.FC<TextImageProps> = ({head, content, buttontxt, image, orientation, fontSize}) => {

    return (
        <div className={`flex justify-between items-center m-5 ${orientation === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <img className="mr-[4rem] ml-[4rem] w-[35%] h-[35%]" src={image}/>
            <div className='flex flex-col justify-center items-center w-[40%]  '>
                <h1 className={`text-[${fontSize}em] font-bold text-black`}>{head}</h1>
                <p className='flex justify-cent text-center text-black text-[1.4em] w-[80%]'>{content}</p>
                <Button buttontxt={buttontxt}/>
            </div>
            
        </div>
    );

};

export default TextImage;