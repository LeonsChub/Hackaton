import React ,{useContext, useEffect, useState} from 'react'
import AddEvent from './AddEvent'
import { AppContext } from './Context'

function DateItem({date, invalid}) {
  const {handleShowEvent, setEventDate, getEventsByDate, setEventName,setEventDescription,setEventFromTo,setModalOnEvent,setPic } = useContext(AppContext);

  const setValues=(name,description,start,end,pic)=>{
      setEventName(name);
        setEventDescription(description);
        setEventFromTo([start,end]);
        setModalOnEvent(true)
        setPic(pic)
  }
  const [todaysEvents, setTodaysEvents] = useState(()=> getEventsByDate(date));
    
  function renderEvents(){
    const returnArr = [];

    todaysEvents.forEach((ev,index)=>{
      returnArr.push(
          <button onClick={(e)=> { setValues(ev.name,ev.description,ev.start,ev.end,ev.eventPic)}}
        key={index}
        className='w-100 pl-1 my-1 mx-1 bg-indigo-600 text-white font-extralight rounded-sm'>
          {ev.name}</button>
      )
    })

    return returnArr;
  }

  useEffect(() => {
    setTodaysEvents(getEventsByDate(date))
  }, [date])
  return (
    <div
        className='h-48 border-y border-x border-zinc-300 bg-slate-100 hover:cursor-pointer hover:bg-slate-300'
        onClick={()=>{
            if(!invalid){
              setEventDate(new Date(date.year, date.month, date.day))
              handleShowEvent()
            }
           
          }}>
          <h1 className={`text-xl font-bold ml-4 ${invalid ? 'text-slate-500':''}`}>{date.day}</h1>
          <div className="eventsWrap">
            {renderEvents()}
          </div>
    </div>
  )
}
export default DateItem