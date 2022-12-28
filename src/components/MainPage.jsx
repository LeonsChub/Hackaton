import {Link} from 'react-router-dom'
import {BiSupport} from 'react-icons/bi'
import { AppContext } from './Context';
import React, { useContext } from "react";
import Support from './Support';

const MainPage = () => {
    const { support,handleClickSupport} = useContext(AppContext);

    return ( 
        <div style={{height:'50rem'}} className="grid grid-cols-3 gap-4 flex" >
            <div className='fixed mt-96 mr-auto right-5'>
                {!support?<div>
              <button onClick={()=>handleClickSupport()} className='transition duration-700 ease-in-out w-28 h-12 whitespace-nowrap rounded-full border border-transparent bg-indigo-800 text-base font-medium text-white shadow-sm hover:bg-indigo-900'>
                <div className='grid grid-cols-8'>
                    <div className='col-span-3'>
                <BiSupport className='ml-2' size={22}/>
                    </div>
                    <div className='col-span-5 text-left'>
                 support
                    </div>
                 </div></button></div>
                 :<Support/>}
            </div>
          
            <div className="col-span-3 flex flex-col items-center">
                
             <h1 className="text-7xl font-bold text-center mt-36">Events made easy</h1>
             <h1 className="text-3xl text-center mt-8">MyCalendar to manage your events from start to finish.</h1>
             <Link to="calendar">
                 <button
                    style={{width:'50vh'}}
                    className="font-bold rounded-full text-white h-10 transition ease-in-out delay-150 bg-blue-500 hover:text-black hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 mt-16">
                        Let's Start
                    </button>
             </Link>
            </div>

            <div className="col-span-3 ">
             <div className=" text-center flex flex-row bg-slate-200 rounded-lg w-11/12 h-60 mx-auto">
                <div className="basis-1/2">
                    <h1 className="text-4xl font-bold mt-6">Top-notch support</h1>
                    <h1 className="text-xl font-bold mt-10 ml-4">All of our features are backed by a knowledgeable support team.</h1>  
                </div>
                <div className="basis-1/2">
                    <img className="w-full h-full rounded-r-lg" src="https://nmgprod.s3.amazonaws.com/media/files/28/09/28098119c156671e8255dedbc45f1db5/cover_image.jpg.760x400_q85_crop_upscale.jpg"/>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default MainPage;