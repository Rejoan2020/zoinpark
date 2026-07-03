import React from 'react' 

export default function Row({serial, id, name, principal, withdrawal}) {
  return (
    <div className={`grid grid-cols-5 items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial===10?"rounded-b-md":""}`}>
          <div className='p-4'>{serial}</div>
          <div className='p-4 flex justify-center '>{id}</div>
          <div className='p-4 flex justify-center  '>{name}</div>
          <div className='p-4 flex justify-center '>{principal}</div>
          <div className='p-4 flex justify-center'>{withdrawal}</div> 
    </div>
  )
}
