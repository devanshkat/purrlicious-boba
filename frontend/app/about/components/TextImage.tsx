import React from 'react';

interface TextImageProps {
    content: string;
    image: string;
    orientation: number;
    fontSize: string;
}

const TextImage : React.FC<TextImageProps> = ({content, image, orientation, fontSize}) => {

    return (
        <div className={`flex min-w-full items-center xl:justify-evenly m-2 xl:m-5 ${orientation === 0 ? "flex-col xl:flex-row" : "flex-col xl:flex-row-reverse"}`}>
            <img className="w-[100%] min-h-full xl:w-[85vmin] xl:h-[75vmin]" src={image}/>
            <div className=''></div>
            <div className={'flex flex-col justify-center items-center w-[110%] xl:w-[50%] pt-5'}>
                
                <p className={`flex text-center text-black text-[3.3vmin] w-[87%] text-${fontSize}xl`}>{content}</p>
            </div>
            
        </div>
    );

};

export default TextImage;