import { NextResponse } from "next/server"
import dotenv from "dotenv"
import { start } from "repl";

const axios = require("axios");

export async function GET( ) {
    dotenv.config();
    const key = process.env.GOOGLE_API_KEY;
        // Get the current date
        const today = new Date();

        // Find the start of the current week (Sunday)
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
    
        // Find the end of the current week (Saturday)
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
    
        // Format dates for the API (ISO 8601 format)
        const timeMin = startOfWeek.toISOString();
        const timeMax = endOfWeek.toISOString();
    
        try {
            const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/cab1502e4c29c6a0108e1a52aeb75d5ff0e50f1671147ce108041889851ba3c4@group.calendar.google.com/events?key=${key}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true`);
    
            let calendarData = [];
            const items = response.data.items;
            const now = new Date();
            
            for (let item of items) {
                console.log(item)
                if (item.kind === "calendar#event") {
                    console.log(`Event: ${item.summary}, Start Date: ${item.start.date || item.start.dateTime}`);
                    
                    let startDate = null;
                    let endDate = null;
                    
                    // Handle both date and dateTime formats
                    if (item.start.date) {
                        startDate = new Date(item.start.date);
                    } else if (item.start.dateTime) {
                        startDate = new Date(item.start.dateTime);
                    }
                    
                    if (item.end.date) {
                        endDate = new Date(item.end.date);
                    } else if (item.end.dateTime) {
                        endDate = new Date(item.end.dateTime);
                    }
                    
                    // Only process events that haven't ended yet
                    if (!endDate || endDate >= now) {
                        let obj = {
                            id: item.id,
                            title: item.summary || "",
                            time: "",
                            location: "",
                            happeningNow: false,
                        };
                        
                        // Format location
                        if (item.location) {
                            obj.location = item.location.split(",").slice(0, 2).join(",");
                        }
                        
                        // Check if event is happening now
                        if (startDate && endDate && startDate <= now && endDate >= now) {
                            obj.happeningNow = true;
                        }
                        
                        // Format time
                        if (startDate) {
                            obj.time = startDate.toLocaleString("en-US", {
                                month: "long",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            });
                        }
                        
                        calendarData.push(obj);
                    }
                }
            }
    
            console.log(calendarData);
            return NextResponse.json(calendarData);
        } catch(err) {
            console.log(err);
            return NextResponse.json({ error: "Failed to fetch events" });
        }
    }
        // const items = data.items;
        // console.log(items);

        // const now = new Date();
        
        // for (let item of items) {
        //     if (item.kind == "calendar#event") {
        //         let startDate = new Date(item.start.dateTime);
        //         let endDate = new Date(item.end.dateTime);
        //         if (endDate >= now) {
        //             let obj = {
        //                 id: "",
        //                 title: "",
        //                 time: "",
        //                 location: "",
        //                 happeningNow: false,
                        
        //             }
        
        //             obj.title = item.summary;
        //             obj.id = item.id;
        //             obj.location = item.location.split(",").slice(0, 2).join();

        //             console.log(item.location)
                    
                    
                    
        //             if ((startDate <= now) && (endDate >= now)){
        //                 obj.happeningNow = true;
        //                 // Add something on screen to give them a seizure so bad they involuntarily go to the tabling
        //             }
                                
        //             obj.time = startDate.toLocaleString("en-US", {
        //                 month: "long",
        //                 day: "numeric",
        //                 hour: "2-digit",
        //                 minute: "2-digit"
        //             })
        //             calendarData.push(obj);
        //         }
        //     }
        // }

        // return NextResponse.json(calendarData);
    // } catch(error) {
    //     console.log(error)
    //     return { error: "Failed to fetch events" };
    // }
// }