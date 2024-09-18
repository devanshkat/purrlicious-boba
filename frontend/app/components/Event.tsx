import React from 'react';
import Logo from "../../public/Images/PLogo.png";

interface EventType {
    id: string;
    title: string;
    time: string;
    location: string;
}

interface EventProps {
    event: EventType;
}

const Event: React.FC<EventProps> = ( {event}) => {
  return (
            <div className='flex flex-col xl:flex-row items-center m-3 h-[full] xl:h-[10vmin] bg-white rounded-[1.5em] transition-all duration-500'>
                <div className='p-1 w-full text-[3vmin]'>{event.location}</div>
                <div className="border-[0.25vmin] border-orange-400 w-[80%] xl:w-[0vmin] xl:h-[7vmin] transition-all duration-500"></div>
                <div className='p-1 w-full text-[3vmin]'>{event.time}</div>
            </div>
            
  );
};

export default Event;
