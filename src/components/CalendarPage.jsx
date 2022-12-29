import React, {useContext} from 'react'
import Calendar from './Calendar'
import { AppContext } from './Context'
import AddEvent from './AddEvent'
import NeedToLogin from './NeedToLogin';

function CalendarPage() {
  const {modalEvent,loggedIn,needToLogin} = useContext(AppContext)
  return (
    <div 
        id='calendarContainer' 
        className='flex flex-col items-center'>
          <div className='w-11/12'>
            <Calendar/>
          </div>
        {modalEvent && loggedIn && <AddEvent/>}
        {modalEvent && !loggedIn &&  <NeedToLogin/> }

    </div>
  )
}

export default CalendarPage