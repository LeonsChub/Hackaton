import {useFormik} from 'formik'
import { AppContext } from './Context';
import React, { useContext } from "react";

const Support = () => { 
    const formik=useFormik({
    initialValues:{
        eventName:'',
        password:''
    }
});  
const {modalOnSignUp,modalOnLogin,loggedIn,handleClickedLogin,setModalOnSignUp,setModalOnLogin,handleLoggedIn,handleClickedSignUp,handleLogOut} = useContext(AppContext);

const handleCancleClick=()=>{
    setModalOnSignUp(false);
}
    return ( 
        <div>
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
           <div class="fixed inset-0 bg-gray-500 bg-opacity-35 transition-opacity"></div>
           <div class="fixed inset-0 z-10 overflow-y-auto">
              <div class="flex min-h-full  items-end place-content-end p-4 text-center sm:items-center sm:p-2">
                 <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-3/12 ">
                   
                    <div>
                        <div className='bg-blue-600 w-full grid grid-cols-12'>
                            <div className='col-span-11'>
                        <h1 className="text-2xl font-bold text-center text-white">contact us</h1>
                            </div>
                            <div className='col-span-1'>
                        <button className='text-4xl text-center text-white'>-</button>
                            </div>

                        </div>
                            <form>
                                
                            <div class="ml-8 grid grid-cols-4 gap-6">
                            <div class="col-span-6 sm:col-span-4">
                            <label class="text-xl font-bold block text-sm font-medium text-gray-700">Your name</label>     
                            <input class="h-8 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type='text'></input>
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                            <label class="text-xl font-bold block text-sm font-medium text-gray-700">email</label>     
                            <input class="h-8 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" type='text'></input>
                            </div>
                            <div class="col-span-6 sm:col-span-4">
                            <label class="text-xl font-bold block text-sm font-medium text-gray-700">How can we help you?</label>     
                            <textarea id="about" name="about" rows="4" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"></textarea>
                            </div>
                            </div>
                               
                            </form>
                    </div>
                       
                    
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                       <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     );
}
 
export default Support;