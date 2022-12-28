import React,{useState} from 'react'
import ChevronLeft from '@heroicons/react/24/solid/ChevronLeftIcon'
import ChevronRight from '@heroicons/react/24/solid/ChevronRightIcon'
import DateItem from './DateItem'

function Calendar() {
    const [month, setmonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())

    function incrementMonth(){
        if(month === 11){
            setmonth( month => 0)
            setYear( year => year + 1)
        }else{
            setmonth( month => month + 1)
        }
    }

    function decrementMonth(){
        if(month === 0){
            setmonth( month => 11)
            setYear( year => year - 1)
        }else{
            setmonth( month => month - 1)
        }
    }

    function formatMonth(month){
        switch (month) {
            case 0:
                return 'January'
            case 1:
                return 'Febuary'
            case 2:
                return 'March'
            case 3:
                return 'April'
            case 4:
                return 'May'
            case 5:
                return 'June'
            case 6:
                return 'July'
            case 7:
                return 'August'
            case 8:
                return 'September'
            case 9:
                return 'October'
            case 10:
                return 'November'
            case 11:
                return 'December'
        
        }
    }

    function getDaysOfMonth(month, year){
        if([0, 2, 4, 6, 7, 9, 11].includes(month)){
            return 31;
        }
        else if([3, 5, 8, 10].includes(month)){    
            return 30;
        }
        else if (month === 1){

            if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
                return 29;
            }
            else{
                return 28;
            }

        }
        else{
            return null;
        }
    }

    function renderDaysInMonth(month, year){
        const firstWeekDayOfMonth = new Date(year, month, 1).getDay()
        //get first day of the mont to render properly
        let daysRangeArray;
        if(firstWeekDayOfMonth === 6){
            daysRangeArray = [...new Array(42)];
        }else{
            daysRangeArray = [...new Array(35)];
        }
        //empty array to iterate over days
        const monthLen = getDaysOfMonth(month,year)

        let prevMonthDays;

        if(month === 0){
            prevMonthDays = getDaysOfMonth(11, year-1)
        }else{
            prevMonthDays = getDaysOfMonth(month - 1, year)
        }
        

        return daysRangeArray.map((element, index) => {
            
            if(index < firstWeekDayOfMonth){
                return (<DateItem date={prevMonthDays + index - firstWeekDayOfMonth + 1}/>)
            }
            else if(index < monthLen + firstWeekDayOfMonth){
                return (<DateItem date={index - firstWeekDayOfMonth + 1}/>)
            }
            else{
                return (<DateItem date={index - (monthLen + firstWeekDayOfMonth) + 1}/>);
            }
        });

    }

    
  return (
    <div 
        className='flex flex-col col-span-3 bg-slate-300 rounded-lg'
        >
        <div 
            id="dateNav" 
            className="flex flex-row items-center justify-around p-2">

            <button 
                className="rounded-full bg-slate-100 hover:bg-slate-400"
                onClick={decrementMonth}>
                <ChevronLeft 
                    className="block h-8 w-8 p-1" 
                    aria-hidden="true"/>
            </button>

                <div className="flex">
                    <p>{year}</p>
                    <p className='ml-2'>{formatMonth(month)}</p>
                </div>


            <button 
                className="rounded-full bg-slate-100 hover:bg-slate-400"
                onClick={incrementMonth}>
                <ChevronRight 
                    className="block h-8 w-8 p-1" 
                    aria-hidden="true"/>
            </button>

        </div>

        <div className='row-span-5'>

            <div className="grid grid-cols-7 border-b-2 border-slate-500">
                <p className='text-center'>S</p>
                <p className='text-center'>M</p>
                <p className='text-center'>T</p>
                <p className='text-center'>W</p>
                <p className='text-center'>T</p>
                <p className='text-center'>F</p>
                <p className='text-center'>S</p>
            </div>

            <div className="grid grid-cols-7 grid-rows-5">
                {renderDaysInMonth(month,year)}
            </div>
        </div>
    </div>
  )
}

export default Calendar