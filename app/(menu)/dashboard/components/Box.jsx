import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Box({url, title, amount}) {
  return (
    <div className='flex items-center justify-between pl-4 pr-4 w-[500px] h-[50px] md:w-[584px] md:h-[60px] lg:w-[650px] lg:h-[70px] xl:w-[716px] xl:h-[80px] border rounded-md border-zinc-800 gradientbg'>
      <div className='flex gap-2'>
        <Image height={24} width={24} src={url}/>
        <div className='pt-1'>{title}</div>
      </div>
      <Button title={amount}/>
    </div>
  )
}
