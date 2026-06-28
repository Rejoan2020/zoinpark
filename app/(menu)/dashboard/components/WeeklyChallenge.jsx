import React from 'react'
import Image from 'next/image'
import Box from './Box'

export default function WeeklyChallenge() {
  const dummy1 = [
    {
      id: 1,
      image: '/icons/weekly/contact.svg',
      name: 'Complete KYC',
      amount: '10 ZOINS'
    },
    {
      id: 2,
      image: '/icons/fbicon.svg',
      name: 'Share on facebook',
      amount: '10 ZOINS'
    },
    {
      id: 3,
      image: '/icons/weekly/twitter.svg',
      name: 'Share on X',
      amount: '10 ZOINS'
    },
    {
      id: 4,
      image: '/icons/linkedinicon.svg',
      name: 'Comment on LinkedIn post',
      amount: '10 ZOINS'
    }
  ]
  const dummy2 = [
    {
      id: 5,
      image: '/icons/yticon.svg',
      name: 'Like 3 videos on Youtube',
      amount: '10 ZOINS'
    },
    {
      id: 6,
      image: '/icons/logo.svg',
      name: 'Share the app',
      amount: '10 ZOINS'
    },
    {
      id: 7,
      image: '/icons/weekly/rate.svg',
      name: 'Rate our app',
      amount: '10 ZOINS'
    },
    {
      id: 8,
      image: '/icons/weekly/feedback.svg',
      name: 'Give us your feedback',
      amount: '100 ZOINS'
    },
  ]
  return (
    <div className='flex flex-col text-secondaryText gap-8 p-2 md:p-4 lg:p-8 xl:p-12 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
      <div>
        <div className='flex'>
          <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
            Weekly Challenge
          </div>
          <div className='bg-[#032C2D] text-[#4AE3C9] rounded-full flex justify-center items-center pl-4 pr-4 ml-4'>
            <Image
              alt='stop watch'
              className='mr-2'
              width={12}
              height={12}
              src='/icons/stopwatch.svg'
            />
            5 days remaining
          </div>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col xl:gap-4 lg:gap-3 md:gap-2 gap-1'>
          {dummy1.map((item) => <Box key={item.id} url={item.image} title={item.name} amount={item.amount} />)} 
        </div>
        <div className='flex flex-col xl:gap-4 lg:gap-3 md:gap-2 gap-1'>
          {dummy2.map((item) => <Box key={item.id} url={item.image} title={item.name} amount={item.amount} />)}
        </div>
      </div>
    </div>
  )
}
