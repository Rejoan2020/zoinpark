import React from 'react'
import Image from 'next/image' 

export default function EditProfile() {
  return (
    <div className='text-primaryText'>
      <div className='p-4 md:p-8 lg:p-12 xl:p-12 flex justify-between'>
        <div>
          <Image alt='Profile' height={96} width={96} src={'/images/pp.png'} />
          <div className='flex text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] pt-4'>
            <button className='p-2 text-primaryColor border border-[#4AE3C933] rounded-md m-2'>Change picture</button>
            <button className='p-2 text-red-500 border border-[#E31A1A33] rounded-md m-2'>Delete</button>
          </div>
        </div>
      </div>
      <div className='border-b border-zinc-800'></div>
      <div className='p-4 md:p-8 lg:p-12 xl:p-12 grid grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8 w-full'>
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>TOI Account ID</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Address</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>First Name</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Country</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Last Name</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>State</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Email Address</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>City</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Contact number</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Zip Code</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'ZOI12345'}
          />
        </div> 

        <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
          <button className='p-2 pl-6 pr-6 bg-primaryColor text-black m-2'>Save</button>
          <button className='p-2 pl-6 pr-6 border border-[#242B2B] m-2'>Cancel</button>
        </div>
      </div>
    </div>
  )
}
