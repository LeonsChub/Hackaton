import React from 'react'
import Calendar from './Calendar'

function CalendarPage() {
  return (
    <div 
        id='calendarContainer' 
        className='grid grid-cols-4 ml-8 mt-5'>
        <Calendar/>
    </div>
  )
}

export default CalendarPage