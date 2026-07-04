'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

export default function Header() {
  let loggedin = true;
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className='flex justify-between items-center xl:text-[20px] lg:text-[16px] md:text-[12px] text-[10px] bg-background text-primaryText border-b border-zinc-800 p-1 md:p-2 lg:p-3 xl:p-4 xl:h-24 lg:h-20 md:h-16 h-12'>
        <div>
          {
            loggedin ?
              <div className='gradient flex justify-start'>
                Welcome Ryan!
              </div> : <div></div>}
        </div>

        <div className='flex gap-4 md:gap-8 lg:gap-12 xl:gap-16'>
          <div
            className='cursor-pointer flex items-center justify-evenly border border-background rounded bg-secondaryColor w-[200px] md:w-[220px] lg:w-[249px] xl:w-[279px]
          xl:text-[18px] lg:text-[16px] md:text-[12px] text-[10px]'>
            <Image height={24} width={24} alt='pdf' src={'/icons/pdf.svg'} /> Download Whitepaper PDF
          </div>
          <div className='flex border rounded xl:p-4 lg:p-2 p-1 border-secondaryColor cursor-pointer'>
            <img src='/icons/notification.svg' />
          </div>
          <div className='cursor-pointer flex items-center border rounded xl:p-4 lg:p-2 p-1 border-secondaryColor text-primaryColor'>
            <div className=''>language</div>
            <Image height={24} width={24} alt='dropdown' src='/icons/dropdown.svg' />
          </div>
          {!loggedin?
          <Link className='cursor-pointer flex items-center' href={'/signin'}>
            Login
          </Link>:
          <div className='cursor-pointer flex items-center relative'>
            <button className='cursor-pointer' onClick={() => setModal(!modal)}>Rayan</button>
            {modal &&
              <div className='text-primaryText absolute right-0 top-full mt-2 bg-[#000000] z-50'>
                <div className='flex h-10 md:h-12 lg:h-14 xl:h-16 p-6 w-31 md:w-35 lg:w-39 xl:w-45 gap-2 items-center'>
                  <Image src={'/icons/settings.svg'} alt='Settings' height={24} width={24} />
                  <div>Settings</div>
                </div>
                <div className='border border-zinc-800'></div>

                <div className='flex h-10 md:h-12 lg:h-14 xl:h-16 p-6 w-31 md:w-35 lg:w-39 xl:w-45 gap-2 items-center'>
                  <Image src={'/icons/logout.svg'} alt='Settings' height={24} width={24} />
                  <div className='text-red-500'>Log Out</div>
                </div>
              </div>
            }
          </div>
          }
        </div>
      </div>
    </>
  )
}
