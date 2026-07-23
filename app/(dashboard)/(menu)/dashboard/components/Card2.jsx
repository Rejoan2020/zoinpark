import React from 'react'
import Image from 'next/image'
import RegisterButton from './RegisterButton'
import CopyLinkEvents from './CopyLinkEvents'
import { isRegistered } from '@/app/actions'

export default async function Card2(card) {
    const registered = await isRegistered(card.id);
    
    return (
        <div>
            <div className='className="w-full border border-zinc-800 rounded-md flex flex-col border border-zinc-800 rounded-md'>
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover"
                        sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    />
                </div>
                <div className='text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] gradient p-2 '>{card.title}</div>
                <div className='text-secondaryText text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] p-2'>{card.description}</div>
                <div className='border ml-2 mr-2 border-zinc-800'></div>
                <div className='flex justify-between p-1 md:p-2 lg:p-4 xl:p-6 text-secondaryText text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
                    <div className='flex flex-col gap-2 md:gap-3 lg:gap-5 xl:gap-6'>
                        <div className='flex gap-2'>
                            <Image
                                alt='calender'
                                className='h-[12px] w-[12px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
                                height={24}
                                width={24}
                                src={'/icons/calender.svg'} />
                            <div>{new Date(card.eventDate).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}</div>
                        </div>
                        <div className='flex gap-2'>
                            <Image
                                alt='location'
                                className='h-[12px] w-[12px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
                                height={24}
                                width={24}
                                src={'/icons/location.svg'} />
                            <div>{card.location}</div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <Image
                            className='h-[12px] w-[12px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
                            height={24}
                            width={24}
                            alt='stopwatch'
                            src={'/icons/stopwatch.svg'} />
                        <div>{new Date(card.eventDate).toLocaleTimeString("en-US", {
                            hour: "numeric",
                            minute: "2-digit",
                        })}</div>
                    </div>
                </div>
                <div className='flex justify-evenly gap-2 p-1 md:p-2 lg:p-4 xl:p-6 text-secondaryText text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
                    <RegisterButton eventId={card.id} initialRegister={registered}/>
                    <CopyLinkEvents registrationLink={card.registrationLink} />
                </div>
            </div>
        </div>
    )
}
