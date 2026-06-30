import React from 'react'
import Image from 'next/image'

export default function StakingNavbar() {
  return (
    <div className='text-secondaryText'>
      <div className='text-primaryText bg-[#032C2D] p-8 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
        1 ZOIN = 0.010355 USDT
      </div>
      <div className='flex pt-8'>
        <div className='border-b border-zinc-800 w-full flex justify-center pb-2'>Staking Packages</div>
        <div className='border-b border-zinc-800 w-full flex justify-center pb-2'>Staking History</div>
      </div>
    </div>

  )
}
