import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex flex-col text-secondaryText items-center gap-4 bg-background xl:pb-4 l:pb-2 md:pb-1 pb-0 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
      <div className='gradient'>Download TOI Community App</div>
      <div className='hidden xl:flex gap-4'>
        <div className='p-2 border border-zinc-800 rounded-l'>
          <img src='/icons/applead.png' />
        </div>
        <img src='/icons/googlead.png' />
      </div>
      <div className='xl:pt-24 l:pt-12 md:pt-0'>To learn more about zoi network visit
        <Link className='text-blue-500' href={'#'}> something.net</Link>
      </div>
      <div className='border-t border-zinc-800 border-b xl:p-8 l:p-6 md:p-4 p-2 w-full flex flex-col items-center'>
        Zoin listing exchanges
        <img src='icons/koinparklogo.svg' />
      </div>
      <div className='flex justify-between w-full pr-4 pl-4 text-secondaryText'>
        <div className='flex gap-8'>
          <div>Terms & Condition</div>
          <div>Privacy Policy</div>
        </div>

        <div>© ZOI DLT Foundation. All rights reserved</div> 

        <div className='flex gap-4 flex-wrap'>
          <img className='h-[14px] w-[14px] md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' width={24} height={24} src='icons/fbicon.svg'/>
          <img className='h-[14px] w-[14px] md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' width={24} height={24} src='icons/yticon.svg'/>
          <img className='h-[14px] w-[14px] md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' width={24} height={24} src='icons/twittericon.svg'/>
          <img className='h-[14px] w-[14px] md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' width={24} height={24} src='icons/linkedinicon.svg'/>
          <img className='h-[14px] w-[14px] md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' width={24} height={24} src='icons/instaicon.svg'/>
          <img className='h-[14px] w-[14px] md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' width={24} height={24} src='icons/discord.svg'/>
          <img className='h-[14px] w-[14px] md:h-[18px] md:w-[18px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' width={24} height={24} src='icons/tiktokicon.svg'/>
        </div>
      </div>
    </div>
  )
}
