import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ResetPass() {
  return (
    <div className='flex flex-col items-center gap-16 text-primaryText mt-12'>
      <Link href={'/dashboard'}><Image alt='Logo' height={52} width={106} src={'icons/logo.svg'} /></Link>
      <div className='flex flex-col gap-2 items-center w-100 md:w-120 lg:w-130 xl:w-140'>
        <div className='mb-12'>
          <div className='text-[32px] md:text-[32px] lg:text-[40px] xl:text-[48px] flex justify-center'>Reset password</div>
          <div className='flex justify-center text-secondaryText text-[12px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>
            Please enter the following information to reset password
          </div>
        </div>
        <div className='flex justify-start w-full gap-4 mt-4'>
          OTP code
        </div>
        <input
          className='bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 text-secondaryText p-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'
          value={"Enter OTP code"}
        />

        <div className='flex justify-between w-full gap-4 mt-4'>
          New Password
        </div>
        <input
          className='bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 text-secondaryText p-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'
          value={"Enter new password"}
        />

        <div className='flex justify-between w-full gap-4 mt-4'>
          Confirm Password
        </div>
        <input
          className='bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 text-secondaryText p-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'
          value={"Confirm password"}
        />

        <button className='w-full bg-primaryColor p-2 mt-4 mb-4 text-black'>Reset password</button>
        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-secondaryText'>
          Don't have an account? <Link className='text-primaryText underline' href={'/'}> Create new account</Link>
        </div>
      </div>
    </div>
  )
}
