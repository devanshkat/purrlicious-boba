import React, { useState } from 'react';
import clsx from "clsx";

interface BobaProps {
    name: string;
    price: string;
    imageloc: string;
    description: string;
    fontSize: number;
    color: string;
}

const BobaCard: React.FC<BobaProps> = ({ name, price, imageloc, description, fontSize, color }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            onClick={handleFlip}
            className="relative  w-[20em] h-[10em] lg:w-[25em] lg:h-[35em] m-4 cursor-pointer"
            style={{ perspective: '1000px' }} 
        >
            <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
                }}
            >
                {/* front */}
                <div
                    className={
                        clsx(
                            "absolute inset-0 flex justify-between flex-row lg:flex-col p-3 lg:p-8 items-center text-center shadow-md transition-all duration-300 ease-in-out text-black bg-white rounded-[2.5em] lg:rounded-[4em] h-full w-full",
                            {
                              "hover:bg-thai-milk-tea": color === "thai-milk-tea",
                              "hover:bg-thai-green-tea": color === "thai-green-tea",
                              "hover:bg-taro-milk-tea": color === "taro-milk-tea",
                              "hover:bg-mango-green-tea": color === "mango-green-tea",
                              "hover:bg-strawberry-green-tea": color === "strawberry-green-tea",
                              "hover:bg-ube-milk-tea": color === "ube-milk-tea",
                            },
                            "hover:text-white"
                          )}
                    style={{
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <div>
                        
                    </div>
                    <img
                        src={imageloc}
                        alt={name}
                        className="m-1 object-cover h-[8rem] w-[8rem] rounded-[2.5em] lg:h-[35rem] lg:w-[25rem]  lg:rounded-[3.5em]"
                    />
                    <div className="m-1 flex-col">
                        <p className={`font-bold text-[1.35em] lg:text-[1.7em]`}>{name}</p>
                        <p className="font-bold text-grey-500 text-[0.8em]">${price}</p>
                    </div>
                    
                </div>

                {/* back */}
                <div
                    className={
                    clsx(`absolute inset-0 flex flex-col p-8 transition-all duration-300 ease-in-out items-center text-center shadow-md 
                        text-black bg-white rounded-[4em] h-full w-full`,
                        {
                            "hover:bg-thai-milk-tea": color === "thai-milk-tea",
                              "hover:bg-thai-green-tea": color === "thai-green-tea",
                              "hover:bg-taro-milk-tea": color === "taro-milk-tea",
                              "hover:bg-mango-green-tea": color === "mango-green-tea",
                              "hover:bg-strawberry-green-tea": color === "strawberry-green-tea",
                              "hover:bg-ube-milk-tea": color === "ube-milk-tea",
                        },
                        `hover:text-white`
                        )}
                    style={{
                        transform: 'rotateX(180deg)',
                        backfaceVisibility: 'hidden', 
                    }}
                >
                    <p className="font-bold text-[2em]">Description</p>
                    <p className="text-[1.5em]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default BobaCard;
