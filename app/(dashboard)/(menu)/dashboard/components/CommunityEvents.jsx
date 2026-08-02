import React from 'react'
import Card2 from './Card2';


export default function CommunityEvents({ events }) {
  return (
    <div className='flex flex-col text-secondaryText gap-8 p-2 md:p-4 lg:p-8 xl:p-12 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] max-lg:mb-20'>
      <div className='p-4'>
        <div className='flex'>
          <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
            Community Events
          </div>
        </div>
        <div>
          Join webinars, AMAs, workshops, and local meetups to learn, connect with the community, and earn rewards by participating.
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 max-lg:p-4 lg:grid-cols-3 gap-4'>
        {events.map((item) =>
          <Card2
            key={item._id.toString()}
            title={item.title}
            description={item.description}
            id={item._id.toString()}
            image={item.image}
            location={item.location}
            eventDate={item.eventDate}
            registrationLink={item.registrationLink}
            status={item.status}
          />)}
      </div>
    </div>
  )
}
