import React from 'react'
import Card2 from './Card2';


export default function CommunityEvents() {
  const dummy = [
    {
      id: 1,
      link: '/icons/home/communityEvents.png',
      url: '/icons/home/communityEvents.png',
      title: 'Traders festival',
      description: 'Lorem ipsum It is a long established fact that. ',
    },
    {
      id: 2,
      link: '/icons/home/invite.png',
      url: '/icons/home/communityEvents.png',
      title: 'Traders festival',
      description: 'Lorem ipsum It is a long established fact that. ',
    },
    {
      id: 3,
      link: '/icons/home/invite.png', 
      url: '/icons/home/communityEvents.png',
      title: 'Traders festival',
      description: 'Lorem ipsum It is a long established fact that. ',
    },
    {
      id: 4,
      link: '/icons/home/invite.png',
      url: '/icons/home/communityEvents.png',
      title: 'Traders festival',
      description: 'Lorem ipsum It is a long established fact that. ',
    },
    {
      id: 5,
      link: '/icons/home/invite.png',
      url: '/icons/home/communityEvents.png',
      title: 'Traders festival',
      description: 'Lorem ipsum It is a long established fact that. ',
    },
    {
      id: 6,
      link: '/icons/home/invite.png',
      url: '/icons/home/communityEvents.png',
      title: 'Traders festival',
      description: 'Lorem ipsum It is a long established fact that. ',
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className='grid grid-cols-3 gap-2 md:gap-3 lg:gap-3 xl:gap-4'>
        {dummy.map((item) => <Card2 key={item.id} link={item.link} url={item.url} title={item.title} description={item.description} />)}
      </div>
    </div>
  )
}
