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
      <div className='border-b border-zinc-800 text-primaryText p-8 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] flex gap-2'>
        <Image className='w-[14px] h-[14px] md:w-[18px] md:h-[18px] lg:w-[26px] lg:h-[26px] xl:w-[32px] xl:h-[32px]' alt='rise' height={24} width={24} src={'/icons/rise.svg'}/>
        <div className='text-primaryColor'>Stake & Earn up to 55% APY (.15% daily) </div>
      </div>
    </div>

  )
}
