import React from 'react'
import Image from 'next/image'
import { updateProfile } from '@/app/actions'
import Link from 'next/link'

export default function EditProfile({ user }) {

  return (
    <div className='text-primaryText'>
      <div className='p-4 md:p-8 lg:p-12 xl:p-12 flex justify-between'>
        <div>
          {user?.image ? (
            <Image
              className="rounded-full"
              alt="Profile"
              height={96}
              width={96}
              src={user.image}
            />
          ) : (
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 rounded-full border border-white flex justify-center items-center">
              {user.name.charAt(0).toUpperCase()}</div>
          )}
          <div className='flex text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] pt-4'>
            <button className='p-2 text-primaryColor border border-[#4AE3C933] rounded-md m-2'>Change picture</button>
            <button className='p-2 text-red-500 border border-[#E31A1A33] rounded-md m-2'>Delete</button>
          </div>
        </div>
      </div>
      <div className='border-b border-zinc-800'></div>
      <form
        className='p-4 md:p-8 lg:p-12 xl:p-12 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8 w-full'
        action={updateProfile}
      >
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>ZOI Account ID</div>
          <input
            name='zoiid'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'ZOI12345'}
          />
        </div>
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Address</div>
          <input
            name='address'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'House#497, Chorail Club Road, Keraniganj, Dhaka'}
          />
        </div>
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Name</div>
          <input
            name='name'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'Md. Rejoanur Rahman Apu'}
          />
        </div>
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Country</div>
          <input
            name='country'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'Bangladesh'}
          />
        </div>
        {/* <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Last Name</div>
          <input
            name='lastname'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'ZOI12345'}
          />
        </div> */}
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>State</div>
          <input
            name='state'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'Keraniganj'}
          />
        </div>
        {/* <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Email Address</div>
          <input
            name='email'
            type='email'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'ZOI12345'}
          />
        </div> */}
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>City</div>
          <input
            name='city'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'Dhaka'}
          />
        </div>
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Contact number</div>
          <input
            name='phone'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'01621089309'}
          />
        </div>
        <div className='w-full'>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Zip Code</div>
          <input
            name='zipcode'
            type='string'
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            placeholder={'1310'}
          />
        </div>

        <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] flex'>
          <button className='p-2 pl-6 pr-6 bg-primaryColor text-black m-2 cursor-pointer'>Save</button>
          <Link
            className='p-2 pl-6 pr-6 border border-[#242B2B] m-2 cursor-pointer'
            href={'/user/settings/profile'}
          // onClick={() => formRef.current?.reset()}
          >back</Link>
        </div>


      </form>
    </div>
  )
}
