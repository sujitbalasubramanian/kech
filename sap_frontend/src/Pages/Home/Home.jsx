import React, {useEffect, useState} from 'react'
import logo from '../../assets/logo.png'
import profile from '../../assets/demo_profile.png'
import Back from '../../assets/profile_background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../App.css'
import Profile from '../../Components/Profile'
import Wallet from '../../Components/Wallet'
import HOD_link from '../../Components/HOD_link'
import ActivityHistory from '../../Components/ActivityHistory'
import Nav from '../../Components/Nav'

import { useSelector } from "react-redux";
import * as api from '../../api';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import StaffRequest from '../../Components/StaffRequest.jsx'


function Home() {
  var {id}=useParams();
  const [user,setUser] = useState(null);

  useEffect(()=>{
    api.Profile(id).then((resp)=>{setUser(resp.data)});
  },[])

  console.log(user)

  return (
    <div className="flex h-screen w-full">
        <Nav uid={id}/>
        <div className="h-full w-full  p-5 pl-20 lg:p-10 lg:pl-32">
            <div className="h-2/4 flex justify-center ">
              {
                user && !(user.is_hod) && <Wallet/>
              }
              {
                user &&
                  user.user_name &&
                    <Profile Name={user.user_name} Dept={user.department} Rollno={user.rollno} ClassName={user.classname}/>
              }
              {
                user &&
                  user.staff_name &&
                    <Profile Name={user.staff_name} Dept={user.department} Rollno={user.department}/>
              }
            </div>
            <div className="h-2/4 p-10 pb-0">
              {
                user && 
                  user.user_name &&
                  <ActivityHistory/>
              }
              {
                user && 
                  user.staff_name &&
                  user.is_hod &&
                    <HOD_link Dept={user.department}/>
              }
              {
                user && 
                  user.staff_name &&
                  !(user.is_hod) &&
                    <StaffRequest/>
              }
            </div>
        </div>
    </div>
  )
}

export default Home
