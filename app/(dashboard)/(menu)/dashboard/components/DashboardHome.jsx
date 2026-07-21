import React from 'react'
import Card from './Card'

export default function DashboardHome({wallet}) {
  const cards = [
    {
      id: 1,
      title: 'Invite and Earn',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/icons/home/invite.png",
      link: "/dashboard/invite"
    },
    {
      id: 2,
      title: 'Weekly challenge',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/icons/home/weekly.png",
      link: "/dashboard/weekly-challenge"
    },
    {
      id: 3,
      title: 'Community Events',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "/icons/home/community.png",
      link: "/dashboard/community-events"
    }
  ];
  return (
    <div className='mb-32'>
      <div className='xl:h-[247px] lg:h-[180px] md:h-[130px] flex xl:text-xl lg:text-l md:text-md border border-zinc-800'>
        <div className='basis-[30%] border-r border-zinc-800 p-4 xl:p-16 l:p-12 md:p-8'>
          <div className='flex'>
            <ul className="text-[#4AE3C9] list-disc pl-5">
              <li></li>
            </ul>
            <div className='gradient'>Zoin balance</div>
          </div>
          <div className='gradient xl:text-[48px] lg:text-[32px]'>
            {wallet.balance}
          </div>
          <div className='flex text-[#4AE3C9]'>+1.2%<img src='icons/home/upArrow.svg' /></div>
        </div>
        <div className='flex flex-col xl:gap-4 lg:gap-2 md:gap-1 basis-[70%] xl:p-16 l:p-12 md:p-8 p-4'>
          <div className='flex'>
            <ul className="text-[#4AE3C9] list-disc pl-5">
              <li></li>
            </ul>
            <div className='gradient'>Airdrop Event | 100000000000</div>
          </div>
          <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
            <div className='bg-[#032C2D80] flex relative overflow-hidden md:h-[24px] lg:h-[32px] xl:h-[48px] h-[24px]'>
              <div className='bg-[#4AE3C9] rounded-md p-4 flex items-center' style={{ width: '13.50%' }}>
                <div className='' style={{ marginLeft: 'px' }}>13.50%</div>
              </div>
              <div className='absolute right-4 top-1/2 -translate-y-1/2'>
                <img className='' src='/icons/home/trophy.svg' />
              </div>
            </div>

            <div style={{ marginLeft: '12%' }}><img src='/icons/home/slidingArrow.svg' /></div>
            <div className='text-primaryText' style={{ marginLeft: '12%' }}>2342342</div>
          </div>

        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {cards.map((num) => <Card
          key={num.id}
          title={num.title}
          description={num.description}
          url={num.image}
          link = {num.link}
        />)
        }
      </div>
    </div>
  )
}
