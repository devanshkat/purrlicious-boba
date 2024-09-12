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
            className="relative w-[25em] h-[35em] m-4 cursor-pointer"
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
                            "absolute inset-0 flex flex-col p-8 items-center text-center shadow-md transition-all duration-300 ease-in-out text-black bg-white rounded-[4em] h-full w-full",
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
                    <img
                        src={imageloc}
                        alt={name}
                        className="object-cover h-[128em] w-[72em] mb-4 rounded-[2em]"
                    />
                    <p className={`font-bold text-[${fontSize}em]`}>{name}</p>
                    <p className="font-bold text-[1em]">${price}</p>
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
