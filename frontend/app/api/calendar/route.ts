import { NextResponse } from "next/server"
import dotenv from "dotenv"


export async function GET( ) {
    dotenv.config();
    const key = process.env.GOOGLE_API_KEY;
    try {
        const response = await fetch(`https://www.googleapis.com/calendar/v3/calendars/cab1502e4c29c6a0108e1a52aeb75d5ff0e50f1671147ce108041889851ba3c4@group.calendar.google.com/events?key=${key}`, {
            method: "GET",
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',  // Additional header for older HTTP/1.0 proxies
                'Expires': '0' ,        // Expire immediately
            }
        });


        let calendarData = [];
        const data = await response.json();
        const items = data.items;

        const now = new Date();
        
        for (let item of items) {
            if (item.kind == "calendar#event") {
                let startDate = new Date(item.start.dateTime);
                let endDate = new Date(item.end.dateTime);
                if (endDate >= now) {
                    let obj = {
                        id: "",
                        title: "",
                        time: "",
                        location: "",
                        happeningNow: false,
                        
                    }
        
                    obj.title = item.summary;
                    obj.id = item.id;
                    obj.location = item.location.split(",").slice(0, 2).join();

                    console.log(item.location)
                    
                    
                    
                    if ((startDate <= now) && (endDate >= now)){
                        obj.happeningNow = true;
                        // Add something on screen to give them a seizure so bad they involuntarily go to the tabling
                    }
                                
                    obj.time = startDate.toLocaleString("en-US", {
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                    calendarData.push(obj);
                }
            }
        }

        return NextResponse.json(calendarData);
    } catch(error) {
        console.log(error)
        return { error: "Failed to fetch events" };
    }
}