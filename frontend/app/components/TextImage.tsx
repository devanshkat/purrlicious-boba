import React from 'react';
import Button from "./Button";

interface TextImageProps {
    head: string;
    content: string;
    buttontxt: string;
    image: string;
    orientation: number;
    fontSize: string;
}

const TextImage : React.FC<TextImageProps> = ({head, content, buttontxt, image, orientation, fontSize}) => {

    return (
        <div className={`flex min-w-full justify-evenly  m-5 ${orientation === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <img className=" w-[65rem] h-[40rem]" src={image}/>
            <div className=''></div>
            <div className='flex flex-col justify-center items-center w-[50%]  '>
                <h1 className={`text-[3rem] text-center font-bold text-black`}>{head}</h1>
                
                <p className='flex text-center text-black text-[1.9rem] w-[60%]'>{content}</p>
                <Button buttontxt={buttontxt}/>
            </div>
            
        </div>
    );

};

export default TextImage;