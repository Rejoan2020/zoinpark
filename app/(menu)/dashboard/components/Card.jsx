import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card(card) {
  return (
    <Link href={card.link} className='p-16 pt-8 pb-8'>
      <div className='border border-zinc-800 rounded-md'>
        <Image height={800} width={800} alt={card.title} src={card.url}/>
        <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] font-bold gradient p-2'>{card.title}</div>
        <div className='text-secondaryText text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] p-2'>{card.description}</div>
      </div>
    </Link>
  )
}
