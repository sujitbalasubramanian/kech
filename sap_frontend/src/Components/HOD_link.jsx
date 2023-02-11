import React,{useEffect,useState} from 'react'
import * as api from '../api'


function HOD_link({Dept}) {
  const [advisor,setAdvisor] = useState([]);
  const [staffs,setStaffs] = useState([]);

  useEffect(()=>{
    api.getStaff(Dept).then((resp)=>{setStaffs(resp.data);});
  },[])

  console.log(staffs)

  return (
    <div className="h-full w-full">
      <div className="px-2  h-10 w-2/5 rounded-lg flex" style={{boxShadow:"3px 4px 10px rgba(0, 0, 0, 0.25)"}}>
        <div className=""></div>
        <input type="text"  placeholder="Search" className="h-full text-xl w-full focus:border-none"/>
      </div>
      {
        staffs && 
          staffs.map(staff => {
            console.log(staff)
            return (
            <div className="h-full w-full grid grid-cols-1 xl:grid-cols-3 xl:my-4 my-10">
              <div className="h-24 flex justify-between mr-10 px-5 rounded-xl  my-4 xl:my-0 xl:mr-10 item-center"style={{boxShadow: "0px 4px 30px 1px rgba(0, 0, 0, 0.25)"}}>
                <div className="flex flex-col justify-center item-center">
                  <div className="text-2xl text-gray font-bold ">{staff.staff_name}</div>
                  <div className="text-lg text-gray font-light">{staff.kongu_email}</div>
                </div>
                <div className="">
                  <form action="" className="flex flex-col item-center justify-between my-6">
                    <div className="relative">
                      <select className="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department' value={staff.year}
                        onChange={async(e)=>{await api.ProfileEdit(staff._id,{...staff,year: e.target.value});console.log(e.target.value)}}>
                        <option>Nil</option>
                        <option>I</option>
                        <option>II</option>
                        <option>III</option>
                        <option>IV</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
                      </div>
                    </div>
                  </form>
                </div> 
                <div className="">
                  <form action="" className="flex flex-col item-center justify-between my-6">
                    <div className="relative">
                      <select className="block appearance-none h-2/12 w-20 text-lg bg-lightgray border-none text-gray hover:border-gray-300 p-3 rounded-md  leading-tight focus:outline-none focus:shadow-outline " placeholder='Department' value={staff.advisor}
                        onChange={async(e)=>{await api.ProfileEdit(staff._id,{...staff,advisor: e.target.value});console.log(e.target.value)}}>
                        <option>Nil</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293,12.95l.707.707L15.657,8l-1.414-1.414L10,10.828 5.757,6.586 4.343,8z"/></svg>
                      </div>
                    </div>
                  </form>
                </div> 
              </div>
            </div>
          )})
      }
    </div>
  )
}

export default HOD_link
