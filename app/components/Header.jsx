import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function Header() {
  let loggedin = true;
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
            <Image height={24} width={24} alt='pdf' src={'/icons/pdf.svg'}/> Download Whitepaper PDF
          </div>
          <div className='flex border rounded xl:p-4 lg:p-2 p-1 border-secondaryColor cursor-pointer'>
            <img src='/icons/notification.svg' />
          </div>
          <div className='cursor-pointer flex items-center border rounded xl:p-4 lg:p-2 p-1 border-secondaryColor text-primaryColor'>
            <div className=''>language</div> 
            <Image height={24} width={24} alt='dropdown' src='/icons/dropdown.svg' /> 
          </div>
          <Link className='cursor-pointer flex items-center' href={'/signin'}>
            Login
          </Link>
        </div>
      </div>
    </>
  )
}
