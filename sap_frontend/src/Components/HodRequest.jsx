import React from 'react'
import profile from '../assets/demo_profile.png'

function HodRequest() {
  return (
     <div className="h-full w-full flex flex-col">
     <div className="w-full h-12 flex rounded-t-3xl mb-2 pt-3 pb-2 px-10 justify-between" style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}} >
         <div className="text-gray text-xl font-bold ">Staff Verification</div>
         {/* <div className="h-full w-32 bg-gray text-white text-lg font-blod text-center  rounded-md flex justify-center items-center cursor-pointer">Add Event</div> */}
     </div>
     <div className="h-full w-full p-10 py-5 rounded-b-3xl " style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
     <div className="h-20 w-full flex">
         <div className="flex w-full">
             <div className="w-1/3 flex flex-col justify-center">
                 <div className="text-gray text-2xl font-bold">Staff Name</div>
                 <div className="">Class A</div>
             </div>
         </div>
         <div className="flex w-2/5 justify-end">
             <div className=" h-full w-full text-gray text-5xl font-semibold flex justify- items-center ">
                 <div className="bg-secondarygreen border-secondarygreen border-2 px-3 rounded-md flex justify-center items-center text-xl text-white font-bold p-1 mx-5 cursor-pointer">Accept</div>
                 <div className="border-secondarygreen border-2 box-content px-2 rounded-md flex justify-center items-center text-xl text-secondarygreen font-bold p-1 cursor-pointer">Decline</div>
             </div>
         </div>
     </div>
     <hr className='w-full h-1 mt-3 border-slate-400'/>  
     </div>
    
 </div>
  )
}

export default HodRequest