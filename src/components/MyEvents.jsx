import { AppContext } from './Context';
import React, { useContext } from "react";
import {formatMonth} from './Calendar'
import Footer from './Footer'


const MyEvents = () => {
    const {eventsArr } = useContext(AppContext);
    function formatDate(day){
        if([4,5,6,7,8,9,0].includes(day % 10)){
         return `${day}th`
        }else if(day % 10 === 3){
         return `${day}rd`
        }else if(day % 10 === 2){
         return `${day}nd`
        }else if(day % 10 === 1){
         return `${day}st`
        }
       }
      
    return ( 
        <div>

        <div class="grid grid-cols-3 gap-4 mt-4 min-h-screen">
            {eventsArr.map(ev=>ev=
            <div className="h-96 bg-slate-100 drop-shadow-2xl px-2 relative ">
            <h1 className="text-2xl font-bold text-center mt-3">{` ${formatMonth(ev.date.getMonth())} ${formatDate(ev.date.getDate())} ${ev.date.getFullYear()}`}</h1>
            <h1 className="text-2xl font-bold mt-4">{ev.name}</h1>
            <p className="text-xl font-bold break-words mt-4">{ev.description}</p>
            <h1 className="text-2xl font-bold">from:{ev.start} to:{ev.end}</h1>
            {ev.eventPic !== null && <img className="h-32 w-full absolute bottom-0 left-0 "src={URL.createObjectURL(ev.eventPic)} />}
            </div>)}
        </div>
           <Footer/>
        </div>
     );
}

 
export default MyEvents;