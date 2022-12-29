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
        className='h-6 whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 text-white shadow-sm hover:bg-indigo-700'>
          {ev.name}</button>
      )
    })

    return returnArr;
  }

  useEffect(() => {
    setTodaysEvents(getEventsByDate(date))
  }, [date])
  return (
    <div className='relative h-48 border-y border-x border-zinc-300 bg-slate-100 hover:cursor-pointer hover:bg-slate-300 '>
      {!invalid && <button className='absolute bottom-0 right-0  h-6 whitespace-nowrap rounded-md border border-transparent bg-green-600 px-4 text-white shadow-sm hover:bg-green-700'
        onClick={()=>{
            if(!invalid){
              setEventDate(new Date(date.year, date.month, date.day))
              handleShowEvent()
            }
           
          }}>add</button>}
          <h1 className={`text-xl font-bold ml-4 ${invalid ? 'text-slate-500':''}`}>{date.day}</h1>
          <div className="eventsWrap">
            {renderEvents()}
          </div>
    </div>
  )
}
export default DateItem