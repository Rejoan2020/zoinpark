import React from 'react'
import Card from './Card'
import Image from 'next/image';

export default function DashboardHome({ wallet, completed }) {
  const cards = [
    {
      id: 1,
      title: "Invite and Earn",
      description: "Share your referral link with friends and earn rewards.",
      image: "/icons/home/invite.png",
      link: "/dashboard/invite"
    },
    {
      id: 2,
      title: "Weekly Challenge",
      description: "Complete weekly tasks and claim exclusive ZOIN rewards before the week ends.",
      image: "/icons/home/weekly.png",
      link: "/dashboard/weekly-challenge"
    },
    {
      id: 3,
      title: "Community Events",
      description: "Join community events, and campaigns to earn bonus rewards and connect with other members.",
      image: "/icons/home/community.png",
      link: "/dashboard/community-events"
    }
  ];
  let progress = completed * 33.33;
  return (
    <div className='mb-32'>
      <div className='md:hidden text-primaryText bg-[#032C2D] p-4 text-[16px]'>
        1 ZOIN = 0.010355 USDT
      </div>
      <div className='xl:h-[247px] lg:h-[180px] lg:flex xl:text-xl lg:text-l md:text-md border border-zinc-800'>
        <div className='max-lg:flex justify-between lg:basis-[30%] border border-zinc-800 p-4 xl:p-16 l:p-12 md:p-8'>
          <div>
            <div className='flex'>
              <ul className="text-[#4AE3C9] list-disc pl-5">
                <li></li>
              </ul>
              <div className='gradient'>Zoin balance</div>
            </div>
            <div className='gradient xl:text-[48px] text-[32px]'>
              {wallet.balance.toFixed(4)}
            </div>
          </div>
          <div className='flex text-[#4AE3C9]'>
            <div className='flex justify-center items-center'>+1.2%</div>
            <Image className='' height={24} width={24} alt='Increasing' src='icons/home/upArrow.svg' />
          </div>
        </div>
        <div className='flex flex-col xl:gap-4 lg:gap-2 md:gap-1 lg:basis-[70%] xl:p-16 lg:p-12 p-4'>
          <div className='flex pb-4'>
            <ul className="text-[#4AE3C9] list-disc pl-5">
              <li></li>
            </ul>
            <div className='gradient'>{`Weekly Challenges | ${completed}/3 Completed`}</div>
          </div>
          <div className='text-[14px] lg:text-[14px] xl:text-[16px]'>
            <div className='bg-[#032C2D80] flex relative h-10'>
              <div className='bg-[#4AE3C9] rounded-md p-4 flex items-center' style={{ width: `${progress}%` }}>
              </div>
              <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                <img className='' src='/icons/home/trophy.svg' />
              </div>
              <div className={`${completed > 1 ? '' : 'text-[#D4AF37]'} absolute top-1/2 -translate-y-1/2 left-1/4`}>
                {completed} challenge{completed === 1 ? '' : 's'} completed!
              </div>

            </div>
            <div style={{ marginLeft: `${progress - 3}%` }}><img src='/icons/home/slidingArrow.svg' /></div>
            {/* <div className='text-primaryText' style={{ marginLeft: `${progress}%` }}>{completed}</div> */}
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {cards.map((num) => <Card
          key={num.id}
          title={num.title}
          description={num.description}
          url={num.image}
          link={num.link}
        />)
        }
      </div>
    </div>
  )
}
