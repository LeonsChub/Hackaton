import SignUp from './SignUp'
import { useState } from 'react';
import Login from './Login';
import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { AppContext } from './Context';
export default function Header() {
    const {modalOnSignUp,modalOnLogin,loggedIn,handleClickedLogin,setModalOnSignUp,setModalOnLogin,handleLoggedIn,handleClickedSignUp,handleLogOut} = useContext(AppContext);
    const handleClickedLogin1=()=>{
        setModalOnLogin(true)
    }
  return (
      <div className="relative bg-white">
   {modalOnSignUp && 
   <SignUp/>
   }
   {modalOnLogin && 
   <Login/>
   }
   <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
         <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to='/' className='hover:animate-bounce flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-10 h-10">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
            </svg>
            <h1 className='ml-2 text-lg font-medium'>myCalendar</h1>
            </Link>
         </div>
         <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
            {!loggedIn?
            <div>
               <button onClick={()=>handleClickedLogin()} className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600">
               Log in
               </button>
               <button onClick={()=>handleClickedSignUp()} className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
               Sign up
               </button>
            </div>
            :
            <div>
               <button onClick={()=>handleLogOut()} className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600">Logout</button>
               
               <Link to='/myEvents'>
                 <button
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                 My Events
                 </button>
               </Link>

            </div>
            } 
         </div>
      </div>
   </div>
</div>
  )
}