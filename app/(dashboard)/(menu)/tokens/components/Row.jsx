import React from 'react'

export default function Row({ serial, id, credit, debit, desc, date, status }) {
  return (
    <div className={`grid max-lg:grid-cols-4 lg:grid-cols-7 lg:grid-cols-[1fr_1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial === 10 ? "rounded-b-md" : ""}`}>
      <div className='p-4 max-lg:hidden'>{serial}</div>
      <div className='p-4 flex justify-center '>{id}</div>
      <div className='p-4 flex justify-center  '>{credit}</div>
      <div className='p-4 flex justify-center '>{debit}</div>
      <div className='p-4 flex justify-center'>{desc}</div>
      <div className='p-4 flex justify-center max-lg:hidden'>{date}</div>
      <div className='p-4 flex justify-center max-lg:hidden'>{status}</div>
    </div>
  )
}
