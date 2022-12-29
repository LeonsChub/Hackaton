import { AppContext } from './Context';
import React, { useContext } from "react";

const EventModal = () => { 
   
const { eventFromTo,eventDescription,eventName,setModalOnEvent,eventPic} = useContext(AppContext);

const handleCancleClick=()=>{
    setModalOnEvent(false);
}
    return ( 
        <div>
            <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
 
  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div className="fixed inset-0 z-10 overflow-y-auto">
    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div className="bg-white pt-5">
          <div className="sm:flex sm:items-start items-center justify-center">
          
  <div className="w-full max-w-md space-y-8 ">
  <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className=" grid grid-rows-2">
    <div className="md:shrink-0 row-span-1">
      <img className="h-48 w-full object-cover"src={eventPic !== null ? URL.createObjectURL(eventPic): ''}/>
    </div>
    <div className=" row-span-2">
      <p  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline mt-8">{eventName}</p>
      <p className="mt-2 text-slate-500 mt-8">from:{eventFromTo[0]} to:{eventFromTo[1]}</p>
      <p className="mt-2 text-slate-500 mt-8">{eventDescription}</p>
    </div>
  </div>
</div>
        </div>
        </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={handleCancleClick} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
     );
}
 
export default EventModal;