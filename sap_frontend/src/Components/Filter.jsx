import React,{useState} from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FilterAltOffOutlinedIcon from '@mui/icons-material/FilterAltOffOutlined';
function Filter() {
    const[style,setstyle]=useState("none")
  return (
    <div> 
    <div className="w-full h-12 flex py-2 relative">
    <div className="w-24 flex h-full  justify-end rounded-lg items-center " style={{boxShadow:"3px 4px 10px rgba(0, 0, 0, 0.25)"}}>
        <FilterAltOffOutlinedIcon className="text-gray"/>
        <div className="text-xl text-gray px-2 font-normal" onClick={()=>{
           if(style=="flex")
           setstyle("none")
           else
            setstyle("flex")
        }}>Filter</div>
    </div>
    <div className="px-2 mx-5 h-full w-2/5 rounded-lg flex " style={{boxShadow:"3px 4px 10px rgba(0, 0, 0, 0.25)"}}>
    <div className=""></div>
    <input type="text"  placeholder="Search" className="h-full text-xl w-full focus:border-none"/>
    </div>
    <div className="bg-gray ml-auto px-2  rounded-md text-xl font-bold text-white">ADD EVENT</div>
</div>
<div className="h-80 w-full flex" style={{display:`${style}`}}>
    <div className="w-1/3 h-full flex flex-col ">
        <div className="w-full flex flex-col my-5">
            <div className="text-gray text-2xl font-bold">Category</div>
            <div className="w-full pt-2">
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>All</div>
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Inside</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Ouside</div>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-col">
            <div className="text-gray text-2xl font-bold">Payment</div>
            <div className="w-full pt-2">
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>All</div>
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Free</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>Paid</div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-1/3 h-full flex flex-col ">
        <div className="w-full flex flex-col my-5">
            <div className="text-gray text-2xl font-bold">Eligibility</div>
            <div className="w-full pt-2">
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>All</div>
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>I-year</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>II-year</div>
                </div>
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>III-year</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>IV-year</div>
                </div>
            </div>
        </div>
    </div>
    <div className="w-1/3 h-full flex flex-col ">
        <div className="w-full flex flex-col my-5">
            <div className="text-gray text-2xl font-bold">Department</div>
            <div className="w-full pt-2">
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2" style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CSE</div>
                <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>IT</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>AI&DS</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>AI&ML</div>
                </div>
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CIVIL</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>MECH</div>
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>EEE</div>
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>E&I</div>
                </div>
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>FT</div>
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CSD</div>
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>CHE</div>
                <div className="text-gray bg-lightgray h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>ECE</div>
                </div>
                <div className="flex">
                <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2 " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>AU</div>
                <div className="text-gray bg-lightgray h-7 w-12 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>MT</div>
                <div className="text-white bg-blue  h-7 w-16 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>V&D</div>
                <div className="text-gray bg-lightgray h-7 w-20 rounded-md flex items-center justify-center my-2 mr-2  " style={{boxShadow:"3px 3px 4px rgba(0, 0, 0, 0.25)"}}>ECE</div>
                </div>
            </div>
        </div>
    </div>

</div>
<hr className='w-full h-1 mt-3 border-slate-400'/>
</div>
  )
}

export default Filter