'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { sendOTP } from '@/app/actions'

export default function ForgetPass() {
    const [email, setEmail] = useState(true);
    return (
        <div className='flex flex-col items-center gap-16 text-primaryText mt-12'>
            <Link href={'/dashboard'}><Image alt='Logo' height={52} width={106} src={'icons/logo.svg'} /></Link>
            <div className='flex flex-col gap-2 items-center w-100 md:w-120 lg:w-130 xl:w-140'>
                <div className='mb-12'>
                    <div className='text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>Forgot password?</div>
                    <div className='flex justify-center text-secondaryText text-[8px] md:text-[12px] lg:text-[16px] xl:text-[20px]'>
                        Please enter your email to reset password
                    </div>
                </div>
                <form action={sendOTP} className='w-full'>
                    <div className='flex justify-start w-full gap-4 mt-4'>
                        <div onClick={() => setEmail(true)} className={`${email ? "underline underline-offset-4" : "text-secondaryText"} cursor-pointer`}>Email</div>
                        <div onClick={() => setEmail(false)} className={`${!email ? "underline underline-offset-4" : "text-secondaryText"} cursor-pointer`}>Phone number</div>
                    </div>
                    <input
                        name={`${email ? "email" : "phone"}`}
                        type={`${email ? "email" : "phone"}`}
                        className='bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 text-secondaryText p-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'
                        placeholder={`Enter your ${email ? "email address" : "phone number"} `}
                    />
                    <button className='w-full bg-primaryColor p-2 mt-4 mb-4 text-black cursor-pointer'>Send OTP</button>
                </form>
                <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-secondaryText'>
                    Don't have an account? <Link className='text-primaryText underline' href={'/signup'}>Create new account</Link>
                </div>
            </div>
        </div>
    )
}
