import React from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Nav from '../../Components/Nav'
import Wallet from '../../Components/Wallet'
import Students from '../../Components/StudentsRequest'
import StaffRequest from '../../Components/StaffRequest'
import HodRequest from '../../Components/HodRequest'
import AddSAP from '../../Components/AddSAP'
function Request() {
  return (
    <div className="flex h-screen w-full">
        <Nav/>
        <div className="h-full w-full  p-10 pl-32">
            <div className="h-2/5 flex justify-center ">
                <Wallet/>
            </div>
            <div className="h-3/5 p-10 pb-0">

                <Students/>
                {/* <StaffRequest/> */}
                {/* <HodRequest/> */}
            </div>
        </div>
        <AddSAP/> 
    </div>
  )
}

export default Request
