import React from 'react'

export default function Row({serial, id, name, principal, withdrawal, balance, start, payment, action}) {
  return (
    <div className='flex text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] mt-4 pl-2 pr-2 xl:pl-4 xl:pr-4'>
          <div className='p-4'>{serial}</div>
          <div className='p-4'>{id}</div>
          <div className='p-4'>{name}</div>
          <div className='p-4'>{principal}</div>
          <div className='p-4'>{withdrawal}</div>
          <div className='p-4'>{balance}</div>
          <div className='p-4'>{start}</div>
          <div className='p-4'>{payment}</div>
          <div className='p-4'>{action}</div>
    </div>
  )
}
