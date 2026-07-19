import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card(card) {
  return ( 
    <div className='bg-secondaryBackground m-8 border border-zinc-800 rounded-lg overflow-hidden'>
      <Link href={card.link}>
        <Image height={376} width={464} alt={card.title} src={card.url} className='w-full h-44 object-cover'/>
      </Link>
      <div className='p-4'>
        <Link href={card.link} className='gradient font-bold'>
          {card.title}
        </Link>
        <div className='text-secondaryText'>
          {card.description}
        </div>
      </div>
    </div>
  )
}
