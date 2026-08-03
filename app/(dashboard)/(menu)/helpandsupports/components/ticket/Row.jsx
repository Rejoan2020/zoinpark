import React from 'react'

export default function Row({ serial, id, subject, category, reqDate, status, query, resDate, res, onView }) {
  return (
    <div className={`p-4 grid justify-center items-center max-lg:grid-cols-4 lg:grid-cols-9 lg:grid-cols-[1fr_3fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial === 10 ? "rounded-b-md" : ""}`}>
      <div className='flex justify-center max-lg:hidden'>{serial}</div>
      <div className='flex justify-center'>{id}</div>
      <div className='flex justify-center'>{subject}</div>
      <div className='flex justify-center max-lg:hidden'>{category}</div>
      <div className='flex justify-center max-lg:hidden'>{reqDate}</div>
      <div className='flex justify-center max-lg:hidden'>{status}</div>
      <div className='flex justify-center'>{query}</div>
      <div className='flex justify-center max-lg:hidden'>{resDate}</div>
      <div className='flex justify-center'>
        <button
          className='p-1 lg:p-2 text-primaryColor border cursor-pointer'
          onClick={onView}
        >{res}</button>
      </div>
    </div>
  )
}
