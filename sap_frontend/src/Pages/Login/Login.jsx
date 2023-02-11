import React, {useState} from 'react'
import background from '../../assets/background.png'
import loginImg from '../../assets/login.png'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAlert } from "../../actions/alert";
import {login } from "../../actions/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("@kongu.edu");
  const [password, setPassword] = useState("123456");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAlert("Logging In", "info", 3000));
    dispatch(login({ kongu_email: email, password }, navigate));
  };

  return (
    <div className="h-screen  w-100  flex items-center shrink-0 " style={{background:`url(${background})`, backgroundSize:"cover"}}>
      <div className="xl:w-3/5 xl:h-3/5 w-4/5  flex flex-col xl:flex-row mx-auto bg-white rounded-2xl">
        <div className="xl:w-2/4 xl:h-full h-full w-full flex flex-col px-8 py-10">
          <div className="font-sans text-2xl font-bold text-[color:var(--gray)]">login</div>
          <div className="font-light">Students Activity Point</div>
          <form action="" className="flex flex-col h-32 my-4 justify-between">
            <input 
            type="text" 
            placeholder="login" 
            className="w-full h-2/5 p-2 border-2 border-neutral-200 rounded-sm active:border-primarygreen"  
            value={email}
              onChange={(e)=>setEmail(e.target.value)}
            required/>
            <input 
            type="password" 
            placeholder="passward" 
            className="w-full h-2/5 p-2 border-2 border-neutral-200 rounded-sm"  
            value={password}
              onChange={(e)=>setPassword(e.target.value)}
            required/>
          </form>
          <div className="flex">
            <input type="checkbox" className=''/>
            <div className='px-1'>Remember me</div>
          </div>
          <div className="h-14 bg-[color:var(--primary-green)] rounded-md my-6 flex align center justify-center text-white font-semibold text-lg hover:border-2 hover:border-primarygreen hover:bg-white hover:text-primarygreen ">
            <button className="w-full" onClick={handleSubmit}>login</button>
          </div>
          <div className="text-center cursor-pointer">new? <a className="text-blue">Register</a></div>
        </div>
        <div className="w-2/4 h-full hidden xl:block rounded-r-2xl" style={{background:`url(${loginImg})`, backgroundSize:"cover"}}>
        </div>
      </div>
    </div>
  )
}

export default Login
