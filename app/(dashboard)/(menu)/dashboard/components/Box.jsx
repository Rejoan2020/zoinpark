import Image from 'next/image'
import React from 'react'
import Button from './Button'

export default function Box({ url, title, amount, challenge }) {
  const challengeWithId = {
    ...challenge.toObject(),
    _id: challenge._id.toString(),
    user: challenge.user.toString(),
  };
  return (
    <div className='flex items-center justify-between pl-4 pr-4 min-w-80 w-full max-w-[716px] lg:w-[650px] h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px] border rounded-md border-zinc-800 gradientbg'>
      <div className='flex gap-2'>
        <Image alt={title} height={24} width={24} src={url} className='h-6 w-6 flex justify-center items-center'/>
        <div className='pt-1'>{title}</div>
      </div>
      <Button challenge={challengeWithId} title={amount} />
    </div>
  )
}
