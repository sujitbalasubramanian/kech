import React from 'react'

function AddEvent() {
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
      <input type="text" placeholder="Event Name" className="w-full h-2/12 p-2 mr-16 text-lg border-2 px-5  bg-lightgray border-none rounded-md  hover:border-gray-300 focus-visible:border-primarygreen "  required/>
      <input type="text" placeholder="Venue" className="w-full h-2/12 p-2 text-lg border-2 bg-lightgray px-5 border-none rounded-md  hover:border-gray-300"  required/>
      </form>
      <form action="" className="flex  my-4 justify-between">
      <div class="relative">
<select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
<option>Category</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
</div>
      </div>
      <div class="relative">
<select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
<option className="text-gray-300">Category</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
</div>
      </div>
      <div class="relative">
<select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
<option className="text-gray-300">Category</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
</div>
      </div>
      <div class="relative">
<select class="block appearance-none h-2/12 w-44 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department'>
<option className="text-gray-300">Category</option>
<option>A</option>
<option>B</option>
<option>C</option>
<option>D</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
</div>
      </div>
      </form>
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

export default AddEvent