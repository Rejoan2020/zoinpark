import React from 'react'

export default function Row({ serial, id, credit, debit, desc, date, status }) {
  return (
    <div className={`grid grid-cols-7 grid-cols-[1fr_1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial === 10 ? "rounded-b-md" : ""}`}>
      <div className='p-4'>{serial}</div>
      <div className='p-4 flex justify-center '>{id}</div>
      <div className='p-4 flex justify-center  '>{credit}</div>
      <div className='p-4 flex justify-center '>{debit}</div>
      <div className='p-4 flex justify-center'>{desc}</div>
      <div className='p-4 flex justify-center'>{date}</div>
      <div className='p-4 flex justify-center'>{status}</div>
    </div>
  )
}
