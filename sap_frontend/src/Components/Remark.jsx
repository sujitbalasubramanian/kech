import React from 'react'

function Remark() {
  return (
    <div className="fixed h-full w-full flex justify-center items-center">
    <div className=" w-4/6  h-4/5 bg-white rounded-xl p-10" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
        <div className="flex justify-between ">
            <div className="text-3xl text-gray font-medium">Event</div>
            <div className="flex">
            <div className="bg-gray mx-5 ml-auto px-2 flex items-center justify-center py-0.5 rounded-md text-xl font-bold text-white text-center flex">
                <div className="">Date</div>
            </div>
            <div className="bg-blue ml-auto px-2  py-0.5 flex items-center justify-center rounded-md text-xl font-bold text-white text-center">Upload image</div>
            </div>
        </div>
        <div className="my-5 flex flex-col">
      <form action="" className="flex  my-4 justify-between">
      <textarea type="text" placeholder="Event Name" className="w-full h-40 p-2  text-lg border-2 px-5  bg-lightgray border-none rounded-md  hover:border-gray-300 focus-visible:border-primarygreen "  required/>
      </form>
        </div>
        <div className="flex justify-end items-center">
            <div className="px-10 bg-primarygreen rounded-lg py-1 text-white text-xl font-bold">Submit</div>
        </div>
    </div>
    </div> 
  )
}

export default Remark