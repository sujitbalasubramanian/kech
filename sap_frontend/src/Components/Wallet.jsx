import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/demo_profile.png'
import Back from '../assets/profile_background.png'
function Wallet() {
  return (
    <div className="h-full w-2/5  mx-10 rounded-3xl flex flex-col justify-end p-10 relative" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                    <div className="absolute  w-60 h-60 rounded-br-full rounded-l-lg bg-gray top-0 left-0 object-contain">
                        <div className="text-9xl absolute top-3 left-2 font-bold text-secondarygreen">22</div>
                    </div>
                    <div className="h-24 w-full flex flex-col">
                        <div className="h-2/4 flex">
                            <div className="h-full w-2/6 text-blue text-center text-3xl font-bold">10</div>
                            <div className="h-full w-2/6 text-blue text-center text-3xl font-bold">10</div>
                            <div className="h-full w-2/6 text-blue text-center text-3xl font-bold">10</div>
                        </div>
                        <div className="h-2/4 flex">
                            <div className="h-full w-2/6 text-blue text-center text-3xl">event</div>
                            <div className="h-full w-2/6 text-blue text-center text-3xl">post</div>
                            <div className="h-full w-2/6 text-blue text-center text-3xl">other</div>
                        </div>
                    </div>
                </div>
  )
}

export default Wallet
