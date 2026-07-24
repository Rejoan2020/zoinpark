import Image from 'next/image'
import React from 'react'

export default function Card({ name, minAmount, maxAmount, dailyProfit, duration, apy, active }) {
  console.log("name  : ", name)
  return (
    <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 border border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-8 bg-[#0C1110] h-[204px] w-[191px] md:h-[274px] md:w-[291px] lg:h-[374px] lg:w-[391px] xl:h-[400px] xl:w-[491px]'>
      <div>
        <div className={`${name=='Gold'?'text-[#F5E083]':name=="Diamond"?"text-[#8FD4F4]": ""} text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px]`}>{name}</div>
        <div className="flex items-center gap-1 text-secondaryText text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]">
          <Image
            src="/icons/goldicon.png"
            alt="Gold Icon"
            width={16}
            height={16}
            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
          />
          <div>{minAmount} ZOIN TO {maxAmount} ZOIN</div>
        </div>
      </div>
      <div className='border-b border-zinc-800'></div>
      <div>
        <div className='flex'>
          <Image className='h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6' height={24} width={24} alt='right' src={'/icons/right.svg'} />
          <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>Daily profit: {dailyProfit}%</div>
        </div>
        <div className='flex'>
          <Image className='h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6' height={24} width={24} alt='right' src={'/icons/right.svg'} />
          <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>{duration}</div>
        </div>
      </div>
      <div className='bg-[#242B2B] w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px] flex justify-between p-4 items-center '>
        <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>Select pay mode</div>
        <Image alt='drown down array' height={12} width={12} src={"/icons/dropdown2.svg"} />
      </div>
      <div className='bg-primaryColor text-black w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px] flex justify-center p-4 items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>
        Stake
      </div>

    </div>
  )
}
