import React from 'react'
import Card2 from './Card2';


export default function CommunityEvents() {
  const dummy = [
    {
      id: 1,
      link: '/icons/home/communityEvents.png',
      url: '/events/ama.png',
      title: 'ZoinPark Community AMA',
      description: 'Meet the ZoinPark team live, ask questions about upcoming features, staking, and the roadmap.',
    },
    {
      id: 2,
      link: '/icons/home/invite.png',
      url: '/events/cryptos.png',
      title: 'Crypto Beginners Workshop',
      description: 'Learn the basics of blockchain, wallets, staking, and how to safely manage your digital assets.',
    },
    {
      id: 3,
      link: '/icons/home/invite.png', 
      url: '/events/meetup.png',
      title: 'Web3 Networking Meetup',
      description: 'Connect with developers, investors, and blockchain enthusiasts while exploring the latest Web3 projects.',
    },
    {
      id: 4,
      link: '/icons/home/invite.png',
      url: '/events/staking.png',
      title: 'Staking Masterclass',
      description: 'Discover staking strategies, risk management, and how to maximize your ZOINS rewards.',
    },
    {
      id: 5,
      link: '/icons/home/invite.png',
      url: '/events/trader.png',
      title: 'Traders festival',
      description: "Participate in this month's community challenge, complete tasks, and compete for exclusive ZOINS rewards.",
    },
    {
      id: 6,
      link: '/icons/home/invite.png',
      url: '/events/roadmap.png',
      title: 'Product Roadmap Live Session',
      description: 'Get an exclusive preview of upcoming ZoinPark features and share your feedback with the development team.',
    }
  ]
  return (
    <div className='flex flex-col text-secondaryText gap-8 p-2 md:p-4 lg:p-8 xl:p-12 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
      <div>
        <div className='flex'>
          <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
            Community Events
          </div>
        </div>
        <div>
          Join webinars, AMAs, workshops, and local meetups to learn, connect with the community, and earn rewards by participating.
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2 md:gap-3 lg:gap-3 xl:gap-4'>
        {dummy.map((item) => <Card2 key={item.id} link={item.link} url={item.url} title={item.title} description={item.description} />)}
      </div>
    </div>
  )
}
