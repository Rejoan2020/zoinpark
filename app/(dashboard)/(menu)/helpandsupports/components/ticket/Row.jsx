import React from 'react'

export default function Row({ serial, id, subject, category, reqDate, status, query, resDate, res, onView }) {
  return (
    <div className={`p-4 grid justify-center items-center grid-cols-9 grid-cols-[1fr_3fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial === 10 ? "rounded-b-md" : ""}`}>
      <div className='flex justify-center'>{serial}</div>
      <div className='flex justify-center'>{id}</div>
      <div className='flex justify-center'>{subject}</div>
      <div className='flex justify-center'>{category}</div>
      <div className='flex justify-center'>{reqDate}</div>
      <div className='flex justify-center'>{status}</div>
      <div className='flex justify-center'>{query}</div>
      <div className='flex justify-center'>{resDate}</div>
      <div className='flex justify-center'>
        <button
          className='p-1 lg:p-2 text-primaryColor border cursor-pointer'
          onClick={onView}
        >{res}</button>
      </div>
    </div>
  )
}
