

interface BobaProps {
    name: string;
    price: string;
    imageloc: string;
}

const BobaCard: React.FC<BobaProps> = ({ name, price, imageloc }) => {
    return (
        <div className="transition-all duration-300 ease-in-out flex flex-col m-4 p-8 items-center 
        text-center shadow-md text-black  bg-white rounded-[4em] h-[36em] w-[30em]
        hover:bg-pink-300 hover:text-white">
                <img
                    src={imageloc}
                    alt={name}
                    className="object-cover h-[128em] w-[72em] mb-4 rounded-[2em]"
                />
           
            <p className="font-bold text-[2em]">{name}</p>
            <p className="font-bold text-[2em]">${price}</p>
        </div>
    );
};

export default BobaCard;
