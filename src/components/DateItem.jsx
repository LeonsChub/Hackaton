import React ,{useContext} from 'react'
import AddEvent from './AddEvent'
import { AppContext } from './Context'

function DateItem({date, invalid}) {
  const {handleShowEvent, setEventDate} = useContext(AppContext);
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
    </div>
  )
}
export default DateItem