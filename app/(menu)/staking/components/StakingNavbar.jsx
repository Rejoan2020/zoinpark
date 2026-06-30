'use client'
import React from 'react'


export default function StakingNavbar({ handleClick, staking }) {
  return (
    <div className='text-secondaryText'>
      <div className='text-primaryText bg-[#032C2D] p-8 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
        1 ZOIN = 0.010355 USDT
      </div>
      <div className='flex pt-8'>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${staking?'text-primaryColor border-primaryColor':'border-zinc-800'}`}
          onClick={() => handleClick("staking")}
        >Staking Packages</button>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${staking?'border-zinc-800 ':'text-primaryColor'}`}
          onClick={()=>handleClick("history")}
        >Staking History</button>
      </div>
    </div>

  )
}
