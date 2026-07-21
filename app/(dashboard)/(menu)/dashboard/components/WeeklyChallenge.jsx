import React from 'react'
import Image from 'next/image'
import Box from './Box'
import { getDaysRemaining } from '@/utils/getRemainingDay'

export default function WeeklyChallenge({ challengeArray }) {
  console.log("weeklyy")

  const dummy1 = [
    {
      id: "stake-100",
      image: '/icons/stakingC.svg',
      name: 'Stake at least 100 ZOINS this week',
      amount: '100 ZOINS'
    },
    {
      id: 'community-event',
      image: '/images/community.png',
      name: "Join this week's community event",
      amount: '100 ZOINS'
    },
    {
      id: 'refer-1',
      image: '/icons/refer.png',
      name: 'Refer 1 friend this week',
      amount: '20 ZOINS'
    },

  ]
  const dummy2 = [
    {
      id: "daily-checkin",
      image: '/icons/dailyCheckin.png',
      name: 'Daily check-in',
      amount: '5 ZOINS'
    },
    {
      id: "visit-5",
      image: '/icons/dailyCheckin.png',
      name: 'Visit ZoinPark for 5 consecutive days',
      amount: '20 ZOINS'
    },
    {
      id: "visit-7",
      image: '/icons/dailyCheckin.png',
      name: 'Visit ZoinPark for 7 consecutive days',
      amount: '50 ZOINS'
    },
  ]
  const day = getDaysRemaining();
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
            {day} days remaining
          </div>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col xl:gap-4 lg:gap-3 md:gap-2 gap-1'>
          {dummy1.map((item) => {
            const challenge = challengeArray.find((ch) => ch.challengeId == item.id);
            return <Box key={item.id} challenge={challenge} url={item.image} title={item.name} amount={item.amount} />
          }
          )}
        </div>
        <div className='flex flex-col xl:gap-4 lg:gap-3 md:gap-2 gap-1'>
          {dummy2.map((item) => {
            const challenge = challengeArray.find((ch) => ch.challengeId == item.id);
            return <Box key={item.id} challenge={challenge} url={item.image} title={item.name} amount={item.amount} />
          }
          )}
        </div>
      </div>
    </div>
  )
}
