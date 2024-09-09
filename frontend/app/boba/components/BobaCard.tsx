import React, { useState } from 'react';

interface BobaProps {
    name: string;
    price: string;
    imageloc: string;
    description: string;
}

const BobaCard: React.FC<BobaProps> = ({ name, price, imageloc, description }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            onClick={handleFlip}
            className="relative w-[30em] h-[36em] m-4 cursor-pointer"
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
                    className="absolute inset-0 flex flex-col p-8 items-center text-center shadow-md text-black bg-white rounded-[4em] h-full w-full
                    hover:bg-pink-300 hover:text-white"
                    style={{
                        backfaceVisibility: 'hidden', 
                    }}
                >
                    <img
                        src={imageloc}
                        alt={name}
                        className="object-cover h-[128em] w-[72em] mb-4 rounded-[2em]"
                    />
                    <p className="font-bold text-[2em]">{name}</p>
                    <p className="font-bold text-[2em]">${price}</p>
                </div>

                {/* back */}
                <div
                    className="absolute inset-0 flex flex-col p-8 items-center text-center shadow-md 
                    text-black bg-white rounded-[4em] h-full w-full
                    hover:bg-pink-300 hover:text-white"
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
