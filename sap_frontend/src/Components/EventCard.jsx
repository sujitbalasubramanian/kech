import React from 'react'
import Img from '../assets/event.png'

function EventCard({Data}) {
  var Imgurl= 'https://localhost:8088/'+Data.poster
  console.log(Imgurl)
  console.log(Data)
  return (
    <div className="w-full h-72 rounded-3xl flex my-10"  style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
                <div className="w-2/4 h-full p-5">
                <img src={Img} alt="" className="w-full h-full rounded-xl" />
                </div>
                <div className="w-2/4 hull p-5 flex flex-col justify-center">
                    <div className="text-gray text-3xl font-bold">{Data.name}</div>
                    <div className="text-blue text-xl font-blod">{Data.club}</div>
                    <div className="text-gray">{Data.description}</div>
                    <div className="text-gray font-light my-2">{Data.end_date}</div>
                    <div className="text-center bg-gray w-40 flex items-center text-white text-2xl font-bold justify-center rounded-lg">VIEW INFO</div>
                </div>
            </div>
  )
}

export default EventCard
