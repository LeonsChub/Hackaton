import React, {useContext} from 'react'
import Calendar from './Calendar'
import { AppContext } from './Context'
import AddEvent from './AddEvent'

function CalendarPage() {
  const {modalEvent} = useContext(AppContext)
  return (
    <div 
        id='calendarContainer' 
        className='flex flex-col items-center'>
          <div className='w-11/12'>
            <Calendar/>
          </div>
        {modalEvent && <AddEvent/>}

    </div>
  )
}

export default CalendarPage