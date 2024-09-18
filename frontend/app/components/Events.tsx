import React from 'react';
import Logo from "../../public/Images/PLogo.png";
import Event from "./Event";

interface EventType {
    id: string;
    title: string;
    time: string;
    location: string;
}

interface EventsProps {
    events: EventType[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <div className="flex flex-col justify-center items-center text-black">
        <div className='text-[6vmin] font-bold'>Events</div>
        <div className='flex flex-col transition-all duration-500 ease-in-out rounded-[1.5em] text-center text-[#454545] p-10 w-[90%]'>

            {
                events.map((ev:any ) => (
                    <Event key={ev.id} event={ev}/>
                ))
            }

            {/* <div className='flex flex-col xl:flex-row items-center m-3 h-[full] xl:h-[10vmin] bg-white rounded-[1.5em] transition-all duration-500'>
                <div className='p-1 w-full text-[3vmin]'>Aggie Recreation Center</div>
                <div className="border-[0.25vmin] border-orange-400 w-[80%] xl:w-[0vmin] xl:h-[7vmin] transition-all duration-500"></div>
                <div className='p-1 w-full text-[3vmin]'>Friday @4:55pm</div>
            </div>

            <div className='flex flex-col lg:flex-row items-center m-3 h-[full] lg:h-[10vmin] bg-white rounded-[1.5em] transition-all duration-500'>
                <div className='p-1 w-full text-[3vmin]'>Aggie Recreation center</div>
                <div className="border-[0.25vmin] border-orange-400 w-[80%] lg:w-[0vmin] lg:h-[7vmin] transition-all duration-500"></div>
                <div className='p-1 w-full text-[3vmin]'>Friday @4:55pm</div>
            </div>

            <div className='flex flex-col lg:flex-row items-center m-3 h-[full] lg:h-[10vmin] bg-white rounded-[1.5em] transition-all duration-500'>
                <div className='p-1 w-full text-[3vmin]'>Aggie Recreation center</div>
                <div className="border-[0.25vmin] border-orange-400 w-[80%] lg:w-[0vmin] lg:h-[7vmin] transition-all duration-500"></div>
                <div className='p-1 w-full text-[3vmin]'>Friday @4:55pm</div>
            </div>

            <div className='flex flex-col lg:flex-row items-center m-3 h-[full] lg:h-[10vmin] bg-white rounded-[1.5em] transition-all duration-500'>
                <div className='p-1 w-full text-[3vmin]'>Aggie Recreation center</div>
                <div className="border-[0.25vmin] border-orange-400 w-[80%] lg:w-[0vmin] lg:h-[7vmin] transition-all duration-500"></div>
                <div className='p-1 w-full text-[3vmin]'>Friday @4:55pm</div>
            </div> */}
            
        </div>
    </div>
    
  );
};

export default Events;
