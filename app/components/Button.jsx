import React from 'react'

export default function Button({title}) {

  return (
    <button className='bg-primaryColor text-black rounded-md h-[40px] w-[88px] md:h-[48px] md:w-[96px] lg:h-[56px] lg:w-[112px] xl:h-[64px] xl:w-[128px]'>
      {title}
    </button>
  )
}
