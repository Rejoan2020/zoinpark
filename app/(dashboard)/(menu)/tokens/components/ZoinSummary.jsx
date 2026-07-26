import React from 'react'

export default function ZoinSummary({totalStaking, totalDebits, totalCredits}) {
  return (
    <div>
    <div className='border-b border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-7 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
      <div className='flex'>
        <ul><li className='list-disc ml-4 text-primaryColor'></li></ul>
        <div className='gradient'>Total Staking</div>
      </div>
      <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>{totalStaking.toFixed(4)} ZOIN</div>
    </div>
    <div className='border-b border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-7 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
      <div className='flex'>
        <ul><li className='list-disc ml-4 text-primaryColor'></li></ul>
        <div className='gradient'>Total credit</div>
      </div>
      <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>{totalCredits.toFixed(4)} ZOIN</div>
    </div>
    <div className='border-b border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-7 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
      <div className='flex'>
        <ul><li className='list-disc ml-4 text-primaryColor'></li></ul>
        <div className='gradient'>Total debit</div>
      </div>
      <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>{totalDebits.toFixed(4)} ZOIN</div>
    </div>
    </div>
  )
}
