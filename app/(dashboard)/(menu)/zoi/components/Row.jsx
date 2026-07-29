import React from 'react' 

export default function Row({serial, subject, date, time, details}) {
  return (
    <div className={`grid grid-cols-5 items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial===10?"rounded-b-md":""}`}>
          <div className='p-4'>{serial}</div>
          <div className='p-4 flex justify-center '>{subject}</div>
          <div className='p-4 flex justify-center  '>{date}</div>
          <div className='p-4 flex justify-center '>{time}</div>
          <div className='p-4 flex justify-center'>{details}</div> 
    </div>
  )
}
