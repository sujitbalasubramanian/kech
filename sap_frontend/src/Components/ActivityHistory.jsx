import React from 'react'

function ActivityHistory() {
  return (
    <div className="h-full w-full p-10 py-5 rounded-3xl" style={{boxShadow:"12px 11px 28px 1px rgba(0, 0, 0, 0.25)"}}>
    <div className="text-blue p-2">Activity History</div>
    <div className="h-7 w-full flex bg-slate-50 px-2">
        <div className="flex w-2/4">
            <div className="w-3/6 text-gray font-semibold">Activity Name </div>
            <div className="w-3/6 text-gray font-semibold">subcatogry</div>
            <div className="w-3/6 text-gray font-semibold">subcatogry2</div>
        </div>
        <div className="flex w-2/4 justify-end">
            <div className="1/4 text-gray font-semibold">10</div>
        </div>
    </div>
    <div className="h-7 w-full flex px-2">
        <div className="flex w-2/4">
            <div className="w-3/6 text-gray font-semibold">Activity Name </div>
            <div className="w-3/6 text-gray font-semibold">subcatogry</div>
            <div className="w-3/6 text-gray font-semibold">subcatogry2</div>
        </div>
        <div className="flex w-2/4 justify-end">
            <div className="1/4 text-gray font-semibold">10</div>
        </div>
    </div>
    <div className="h-7 w-full flex bg-slate-50 px-2">
        <div className="flex w-2/4">
            <div className="w-3/6 text-gray font-semibold">Activity Name </div>
            <div className="w-3/6 text-gray font-semibold">subcatogry</div>
            <div className="w-3/6 text-gray font-semibold">subcatogry2</div>
        </div>
        <div className="flex w-2/4 justify-end">
            <div className="1/4 text-gray font-semibold">10</div>
        </div>
    </div>
    </div>
  )
}

export default ActivityHistory