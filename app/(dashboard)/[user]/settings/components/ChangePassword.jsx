import React from 'react'

export default function ChangePassword() {
  return (
    <div
      className='flex flex-col gap-6 lg:gap-12 p-4 md:p-8 lg:p-12 xl:p-12 text-primaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
      <div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>Change Password</div>
        <div className='text-secondaryText'>Complete the following fields to change the password</div>
      </div>
      <div className='grid grid-cols-2'>
        <div>
          <div>Current Password</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'Enter current password'}
          />
        </div>
      </div>

      <div className='grid grid-cols-2'>
        <div>
          <div>New Password</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'Enter new password'}
          />
        </div>
      </div>

      <div className='grid grid-cols-2'>
        <div>
          <div>Confirm Password</div>
          <input
            className='rounded-md text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 p-1 mt-2'
            value={'Re-enter new password'}
          />
        </div>
      </div>

      <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
        <button className='p-2 pl-6 pr-6 bg-primaryColor text-black m-2'>Update</button>
        <button className='p-2 pl-6 pr-6 border border-[#242B2B] m-2'>Cancel</button>
      </div>
    </div>
  )
}
