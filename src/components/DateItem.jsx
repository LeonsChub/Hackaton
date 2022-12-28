import React ,{useContext} from 'react'
import AddEvent from './AddEvent'
import { AppContext } from './Context'

function DateItem({date}) {
  const {handleShowEvent, setEventDate} = useContext(AppContext);
  return (
    <div
        className='h-48 border-y border-x border-zinc-300 bg-slate-100 hover:cursor-pointer'
        onClick={()=>{
           setEventDate(new Date(date.year, date.month, date.day))
            // alert(`Y ${date.year} M ${date.month} D ${date.day}`)
            handleShowEvent()
          }}>
        <h1 className="text-xl font-bold ml-4">{date.day}</h1>
    </div>
  )
}
export default DateItem