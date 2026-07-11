'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useActionState, useState } from 'react';
import { logIn, signInWithGoogle } from '@/app/actions';

const initialState = {
  error: null,
};

export default function SignIn() {
  const [email, setEmail] = useState(true);
  const [state, formAction, pending] = useActionState(logIn, initialState)
  return (
    <div className='flex flex-col min-h-full items-center gap-16 text-primaryText mt-12'>
      <Link href={'/dashboard'}><Image alt='Logo' height={52} width={106} src={'icons/logo.svg'} /></Link>
      <div className='flex flex-col gap-2 items-center'>
        <div className='mb-12'>
          <div className='text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>Welcome to ZOI Community</div>
          <div className='flex justify-center text-secondaryText text-[12px] md:text-[14px] lg:text-[17px] xl:text-[20px]'>Please enter your details to sign in to your account</div>
        </div>
        <form
          className='w-full'
          action={formAction}
        >
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

          <div className='flex justify-between w-full gap-4 mt-4'>
            <div className=''>Password</div>
            <Link href={'/forgetpassword'} className='underline text-secondaryText cursor-pointer'>Forgot Password?</Link>
          </div>
          <input
            name='password'
            type='password'
            className='bg-[#242B2B] w-full h-10 md:h-12 lg:h-14 xl:h-16 text-secondaryText p-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'
            placeholder={"Enter your password"}
          />
          {state?.error && (
            <p className="text-red-500">{state.error}</p>
          )}
          <button className='w-full bg-primaryColor p-2 mt-4 mb-4 text-black cursor-pointer'>Sign in</button>
        </form>
        <form
          action={signInWithGoogle}
          className='w-full'
        >
          <button className='flex w-full p-2 mb-4 bg-white text-black cursor-pointer'>
            <Image
              className=''
              alt='google logo'
              height={24}
              width={24}
              src={'/icons/google.webp'}
            />
            <div className='w-full'>Sign in with Google</div>
          </button>
        </form>

        <div className='text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] text-secondaryText'>
          Dont you have an account? <Link className='text-primaryText underline' href={'/signup'}>Create a new account</Link>
        </div>
      </div>
    </div >
  )
}
