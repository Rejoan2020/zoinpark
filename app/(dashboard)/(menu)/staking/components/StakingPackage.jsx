import React from 'react'
import Card from './Card'
import Image from 'next/image'

export default function StakingPackage({ packages }) {
  const maxApy = Math.max(...packages.map(pkg => pkg.apy));
  const maxDailyProfit = Math.max(...packages.map(pkg => pkg.dailyProfit));
  return (
    <div>
      <div className='border-b border-zinc-800 text-primaryText p-8 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] flex gap-2'>
        <Image className='w-[14px] h-[14px] md:w-[18px] md:h-[18px] lg:w-[26px] lg:h-[26px] xl:w-[32px] xl:h-[32px]' alt='rise' height={24} width={24} src={'/icons/rise.svg'} />
        <div className='text-primaryColor'>Stake & Earn up to {maxApy}% APY ({maxDailyProfit}% daily) </div>
      </div>
      <div className='text-primaryText p-8 flex flex-col gap-4'>

        <div>
          <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>Staking Package</div>
          <div className='text-secondaryText'>Grow your ZOINS by staking them and earning daily rewards. Choose a package that matches your investment goals and start earning passive income immediately.</div>
        </div>
        <div className='flex gap-4'>
          {
            packages.map((pkg) => <Card key={pkg._id} {...pkg} />)
          }
        </div>
      </div>
    </div>
  )
}
