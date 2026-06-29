import React from 'react'
import Card from './Card'

export default function StakingPackage() {
  return (
    <div className='text-primaryText p-8 flex flex-col gap-4'>
      <div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>Staking Package</div>
        <div className='text-secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <div className='flex gap-4'>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
