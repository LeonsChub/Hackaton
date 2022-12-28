import {useFormik} from 'formik'
import { AppContext} from './Context';
import React, { useContext,useRef,useState } from "react";
import {formatMonth} from './Calendar'

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

function renderOptions(){
  const emtyArr = [... new Array(24)]
  const returnArr = []

  emtyArr.map((e,index)=>{
    const hour = index < 10 ? `0${index}:00` : `${index}:00`;
    returnArr.push
      (<option key={index} value={hour}>{hour}</option>)
    })
    
    return returnArr;
}

const AddEvent = () => {
    const {setModalOnSignUp,handleCloseEvent,eventDate,pushEvent} = useContext(AppContext);
    const uploadRef = useRef(null)
    const [uploadImg, setUploadImg] = useState(null)
    const [errors, setErrors] = useState({});
    const submitRef = useRef(null)

    const formik=useFormik({
    initialValues:{
        eventName:'',
        eventDesc:'',
        eventStart:'00:00',
        eventEnd:'00:00',
      }
    });

    function validate(values){
      let errors = {};
      if(!values.eventName){
        errors.eventName = 'Event Name Required';
      }
      const startEv = parseInt(values.eventStart.substring(0,2))
      const endEv = parseInt(values.eventEnd.substring(0,2))

      if(startEv >= endEv){
        errors.chronology = 'Event end must come after event start'
      }

      
      if(Object.keys(errors).length === 0 && errors.constructor === Object){
        const eventToAdd = {
          name: values.eventName,
          description: values.eventDesc,
          start: values.eventStart,
          end: values.eventEnd,
          date: eventDate,
          eventPic:uploadImg,
        }
        pushEvent(eventToAdd)
        handleCloseEvent()
      }
      setErrors(errors);
    }


    return ( 
        <div>
   <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start items-center justify-center">
                     <div className="w-full max-w-md space-y-8 ">
                        <div className='flex items-center justify-between'>
                           <h1>{`Add event on ${formatMonth(eventDate.getMonth())} ${formatDate(eventDate.getDate())} ${eventDate.getFullYear()}`}</h1>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="  w-10 h-10">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                           </svg>
                        </div>
                        <form 
                           onSubmit={(e)=>
                           {
                           e.preventDefault()
                           validate(formik.values)
                           }} noValidate>
                           <div className="overflow-hidden shadow sm:rounded-md">
                              <div className="bg-white px-4 py-5 sm:p-6">
                                 <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-7 sm:col-span-6">
                                       <input 
                                          onChange={formik.handleChange}  
                                          value={formik.values.eventName}
                                          name="eventName" 
                                          type="text" 
                                          className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                                          placeholder="Event name"
                                          required/>

                                        <span
                                          className='ml-1 text-red-500 text-xs'
                                          >{errors.eventName}
                                          </span>

                                       <textarea 
                                          onChange={formik.handleChange}  
                                          value={formik.values.eventDesc}
                                          name="eventDesc" 
                                          type="text"
                                          rows = "4" 
                                          className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 mt-3 resize-none text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                                          placeholder="Description (Optional)"
                                          />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                       <label 
                                          className="block text-sm font-medium text-gray-700"
                                          >Event Start
                                       </label>
                                       <select 
                                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                          name='eventStart'
                                          value={formik.values.eventStart}
                                          onChange={formik.handleChange}>
                                       {renderOptions()}
                                       </select>
                                    </div>
                                    
                                    <div className="col-span-6 sm:col-span-3">
                                       <label 
                                          className="block text-sm font-medium text-gray-700"
                                          >Event End
                                       </label>
                                       <select 
                                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                          name='eventEnd'
                                          value={formik.values.eventEnd}
                                          onChange={formik.handleChange}
                                          >
                                       {renderOptions()}
                                       </select>
                                    </div>

                                    <span
                                          className='ml-1 text-red-500 text-xs col-span-6'
                                          >{errors.chronology}
                                          </span>
                                    
                                    <div className="col-span-6">
                                       <input
                                          accept="image/jpeg, image/png, image/jpg"
                                          ref={uploadRef}
                                          id='input-file'
                                          className="hidden"
                                          onChange={(e)=>{setUploadImg(e.currentTarget.files[0])}}
                                       type="file" />
                                       <button
                                          type="button" 
                                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                          onClick={()=>{{uploadRef.current.click()}}}>+ Upload Photo</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <button type='submit' className='hidden' ref={submitRef}>asd</button>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="bg-gray-50 px-4 py-3 flex justify-between">
                  <button
                     type="button" 
                     className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                     onClick={handleCloseEvent}>Cancel</button>
                  <button 
                     className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                     onClick={()=>submitRef.current.click()}
                  //  <img src={URL.createObjectURL(FILE_OBJECT)} /> 
                  >Submit</button>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
     );
}
 
export default AddEvent;