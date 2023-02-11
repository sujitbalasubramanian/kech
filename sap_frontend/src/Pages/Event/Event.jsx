import React, {useState,useEffect} from "react";      
import Nav from "../../Components/Nav";
import Filter from "../../Components/Filter";
import EventCard from "../../Components/EventCard";
import AddEvent from "../../Components/AddEvent";
import * as api from '../../api';
import {useParams} from 'react-router-dom'

function Event({data}){
  const [events,setEvents] = useState(null);

  useEffect(()=>{
    api.Eventsall().then((resp)=>{setEvents(resp.data)});
  },[])

  console.log(events);

    return(
        <div className="flex h-screen w-full ">
           <Nav/>
        <div className="h-full w-full pt-10 px-20 pl-32 ">
            <Filter/>
            <div className="h-full w-full ">
              {
                events != null &&
                  events.map(e => <EventCard Data={e}/>)
              }
            </div>
        </div>
        {/* <AddEvent/> */}
        </div>
    )
}
export default Event
