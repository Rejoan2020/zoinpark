import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Profile() {
  return (
    <div>
      <div className='p-4 md:p-8 lg:p-12 xl:p-12 flex justify-between'>
        <div>
          <Image alt='Profile' height={96} width={96} src={'/images/pp.png'} />
          <div className='text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]'>Mr. John Abraham</div>
          <div className='text-primaryColor text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>TOI123456</div>
        </div>
        <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
          <Link className='p-2 bg-primaryColor text-black m-2' href={'/user/settings/edit-profile'}>Edit profile</Link>
          <Link className='p-2 bg bg-[#242B2B] m-2' href={'/user/settings/changepassword'}>Change password</Link>
        </div>
      </div>
      <div className='border-b border-zinc-800'></div>
      <div className='p-4 md:p-8 lg:p-12 xl:p-16 grid grid-cols-2 gap-2 md:gap-4 lg:gap-6 xl:gap-8'>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Email</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>rejoan@gmail.com</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Country</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>United States</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Contact Number</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>01621089309</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>State</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>New York</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Address</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Chorail Club Road, Dhaka</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>City</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Dhaka</div>
        </div>
        <div></div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Zip Code</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>1110</div>
        </div>
      </div>

    </div>
  )
}
