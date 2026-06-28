import React from 'react'

export default function Button({title}) {

  return (
    <button className='bg-primaryColor text-black rounded-md h-[24px] w-[58px] md:h-[28px] md:w-[66px] lg:h-[36px] lg:w-[74px] xl:h-[40px] xl:w-[83px] text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]'>
      {title}
    </button>
  )
}
