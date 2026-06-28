import React from 'react'
import Link from 'next/link'

export default function Card(card) {
  return (
    <Link href={card.link} className='xl:p-16 l:p-10 md:p-4 p-2'>
      <div className='xl:h-[375px] xl:w-[464px] lg:h-[300px] lg:w-[350px] md:h-[200px] md:w-[200px] h-[150px] w-[150px] border border-zinc-800 rounded-md'>
        <img src={card.url}/>
        <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] gradient xl:p-8 l:p-4 p-2 md:p-2 md:pb-0 xl:pb-0 l:pb-0'>{card.title}</div>
        <div className='text-secondaryText text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] xl:p-8 l:p-4 md:p-2 p-2  xl:pt-0 l:pt-0 md:pt-0'>{card.description}</div>
      </div>
    </Link>
  )
}
