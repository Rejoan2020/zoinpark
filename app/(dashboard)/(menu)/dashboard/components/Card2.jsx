import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card2(card) {
    return (
        <div>
            <div className='className="w-full border border-zinc-800 rounded-md flex flex-col border border-zinc-800 rounded-md'>
                <Image  alt='card' className="w-full h-auto object-cover" width={464} height={546} src={card.url} />
                <div className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] gradient xl:p-8 l:p-4 p-2 md:p-2 md:pb-0 xl:pb-0 l:pb-0'>{card.title}</div>
                <div className='text-secondaryText text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] xl:p-8 l:p-4 md:p-2 p-2  xl:pt-0 l:pt-0 md:pt-0'>{card.description}</div>
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
