import React from 'react'
import Searchbar from '@/app/components/Searchbar'
import Image from 'next/image'

export default function Tutorial() {
  const dummy = [
    {}
  ]
  return (
    <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
      <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
        Tutorials
      </div>
      <div className='flex gap-2 justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
        <div className='text-secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <Searchbar />
        <select className='bg-[#242B2B] h-8 w-20 md:h-10 md:w-30 lg:h-12 lg:w-40 xl:h-14 xl:w-50 flex items-center p-2 text-primaryText'>
          <option>Category</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
      </div>
      <div className='text-secondaryText grid grid-cols-3 gap-4 mt-4 md:mt-8 lg:mt-12 xl:mt-16'>
        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <Image alt='image' width={472} height={266} src={'/images/talkshow.png'} />
          <div className='pt-2 md:pt-4 lg:pt-6 xl:pt-8'>
            <div className='text-primaryText'>Title</div>
            <div className='text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <Image alt='image' width={472} height={266} src={'/images/talkshow.png'} />
          <div className='pt-2 md:pt-4 lg:pt-6 xl:pt-8'>
            <div className='text-primaryText'>Title</div>
            <div className='text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <Image alt='image' width={472} height={266} src={'/images/talkshow.png'} />
          <div className='pt-2 md:pt-4 lg:pt-6 xl:pt-8'>
            <div className='text-primaryText'>Title</div>
            <div className='text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <Image alt='image' width={472} height={266} src={'/images/talkshow.png'} />
          <div className='pt-2 md:pt-4 lg:pt-6 xl:pt-8'>
            <div className='text-primaryText'>Title</div>
            <div className='text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <Image alt='image' width={472} height={266} src={'/images/talkshow.png'} />
          <div className='pt-2 md:pt-4 lg:pt-6 xl:pt-8'>
            <div className='text-primaryText'>Title</div>
            <div className='text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <Image alt='image' width={472} height={266} src={'/images/talkshow.png'} />
          <div className='pt-2 md:pt-4 lg:pt-6 xl:pt-8'>
            <div className='text-primaryText'>Title</div>
            <div className='text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-8 text-secondaryText text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] mb-12'>
        <div className='bg-[#242B2B] p-2 rounded-md'>See More</div>
      </div>
    </div>
  )
}
