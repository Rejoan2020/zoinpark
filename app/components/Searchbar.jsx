import React from 'react'
import Image from 'next/image'

export default function Searchbar() {
  return (
    <div className='bg-[#242B2B] h-8 w-60 md:h-10 md:w-70 lg:h-12 lg:w-80 xl:h-14 xl:w-90 flex items-center p-2'>
      <div className='flex text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] gap-2'>
        <Image className='h-[12px] w-[12px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' alt='search icon' height={24} width={24} src={'/icons/search.svg'} />
        <input
          type='text'
          value={'Search'}
          className="flex-1 bg-transparent text-primaryText placeholder:text-secondaryText outline-none"
        />
      </div>
    </div>
  )
}
