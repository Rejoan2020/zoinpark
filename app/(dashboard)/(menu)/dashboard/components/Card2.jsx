import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card2(card) {
    return (
        <div>
            <div className='className="w-full border border-zinc-800 rounded-md flex flex-col border border-zinc-800 rounded-md'>
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src={card.url}
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
                                className='h-[12px] w-[12px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
                                height={24}
                                width={24}
                                src={'/icons/calender.svg'} />
                            <div>30 september, 2025</div>
                        </div>
                        <div className='flex gap-2'>
                            <Image
                                className='h-[12px] w-[12px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
                                height={24}
                                width={24}
                                src={'/icons/location.svg'} />
                            <div>Dhaka</div>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <Image
                            className='h-[12px] w-[12px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
                            height={24}
                            width={24}
                            src={'/icons/stopwatch.svg'} />
                        <div>7:30 pm</div>
                    </div>
                </div>
                <div className='flex justify-evenly gap-2 p-1 md:p-2 lg:p-4 xl:p-6 text-secondaryText text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'>
                    <button className='p-2 bg-primaryColor text-black rounded-md flex-1'>
                        Join event
                    </button>
                    <button className='p-2 bg-white text-black rounded-md flex-1'>
                        Copy Link
                    </button>
                </div>
            </div>
        </div>
    )
}
