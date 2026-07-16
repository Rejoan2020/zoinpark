import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Profile({ user }) {
  console.log("profile:   ", user);
  return (
    <div className='text-primaryText'>
      <div className='p-4 md:p-8 lg:p-12 xl:p-12 flex justify-between'>
        <div className='text-white'>
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
          <div className='text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]'>{user?.name}</div>
          <div className='text-primaryColor text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.zoiid ? user?.zoiid : "----"}</div>
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
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.email ? user?.email : "----"}</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Country</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.country ? user?.country : '----'}</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Contact Number</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.phone ? user?.phone : "----"}</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>State</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.state ? user?.state : "----"}</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Address</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.address ? user?.address : "----"}</div>
        </div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>City</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.city ? user?.city : "----"}</div>
        </div>
        <div></div>
        <div>
          <div className='text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>Zip Code</div>
          <div className='text-secondaryText text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>{user?.zipcode ? user?.zipcode : "----"}</div>
        </div>
      </div>
    </div>
  )
}
