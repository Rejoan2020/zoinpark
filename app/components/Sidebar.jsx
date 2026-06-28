import React from 'react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className='flex flex-col shrink-0 bg-background text-primaryText xl:w-[320px] lg:w-[260px] md:w-[200px] w-[180px] border-r border-zinc-800 text-secondaryText'>
      <Link href={'/'} className='flex border-b border-zinc-800 p-2 xl:p-7 lg:p-5 md:p-3 justify-center xl:h-[96px] lg:h-[80px] md:h-[64px] h-[48px] cursor-pointer'><img src='/icons/logo.svg'/></Link>
      <div className='flex items-center gap-2 p-6 pl-8 cursor-pointer'>
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' src='/icons/dashboard.svg'/>
        <Link href={'/'} className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] '>Dashboard</Link>
      </div>
      <div className='flex items-center gap-2 p-6 pl-8 cursor-pointer'>
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/staking.svg'/>
        <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] '>Staking center</div>
      </div>
      <div className='flex items-center gap-2 p-6 pl-8 cursor-pointer'>
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/tokens.svg'/>
        <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] '>Tokens</div>
      </div> 
      <div className='flex items-center gap-2 p-6 pl-8 cursor-pointer'>
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/support.svg'/>
        <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] '>Help & Supports 
          
        </div><img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' src='/icons/dropdown2.svg'/>
      </div>
      <div className='flex items-center gap-2 p-6 pl-8 cursor-pointer'>
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/zoi.svg'/>
        <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] '>ZOI Announcements</div>
      </div> 
    </div>
  )
}
