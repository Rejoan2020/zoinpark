import React from 'react' 

export default function Row({serial, id, name, principal, withdrawal, balance, start, payment, action}) {
  return (
    <div className={`flex items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial===10?"rounded-b-md":""}`}>
          <div className='p-4'>{serial}</div>
          <div className='p-4 flex justify-center w-32 md:w-40 lg:w-52 xl:w-66'>{id}</div>
          <div className='p-4 flex justify-center  '>{name}</div>
          <div className='p-4 flex justify-center w-32 md:w-40 lg:w-52 xl:w-66'>{principal}</div>
          <div className='p-4 flex justify-center'>{withdrawal}</div>
          <div className='p-4 flex justify-center'>{balance}</div>
          <div className='p-4 flex justify-center'>{start}</div> 
    </div>
  )
}
