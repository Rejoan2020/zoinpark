import React, { useState } from 'react'
import Searchbar from '@/app/components/Searchbar'
import Row from './Row'
import { differenceInCalendarDays } from 'date-fns'

export default function StakingHistory({ history, totalStaking }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  let serial = 0;
  function handleSearch(e) {
    setSearchKeyword(e.target.value);
    console.log("inside handleSearch")
  }
  return (
    <div className='text-primaryText'>
      <div className='border-b border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-7 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
        <div className='flex'>
          <ul><li className='list-disc ml-4'></li></ul>
          <div className='gradient'>Total Staking</div>
        </div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>{totalStaking} ZOIN</div>
      </div>
      <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Staking history
        </div>
        <div className='flex justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <div className='text-secondaryText'>You can withdraw your principal USDT after 1 month.</div>
          <Searchbar
            handleSearch={handleSearch}
            earchKeyword={searchKeyword} 
          />
        </div>
        <div className='grid grid-cols-9 grid-cols-[60px_100px_repeat(7,minmax(0,1fr))] lg:grid-cols-[60px_200px_repeat(7,minmax(0,1fr))] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
          <div className='p-4'>Serial No.</div>
          <div className='p-4 flex justify-center items-center'>Staking ID</div>
          <div className='p-4 flex justify-center items-center'>Investment Name</div>
          <div className='p-4 flex justify-center items-center'>Principal (ZOIN)</div>
          <div className='p-4 flex justify-center items-center'>Withdrawable (ZOIN)</div>
          <div className='p-4 flex justify-center items-center'>Balance (ZOIN)</div>
          <div className='p-4 flex justify-center items-center'>Investment Start</div>
          <div className='p-4 flex justify-center items-center'>Payment Mode</div>
          <div className='p-4 flex justify-center items-center'>Action</div>
        </div>
        {history.map((row) => {
          serial++;
          const daysPassed = differenceInCalendarDays(
            new Date(),
            row.startDate
          );
          const reward = Number((row.amount * (row.dailyProfit / 100) * daysPassed - row.claimedRewards).toFixed(4));
          const balance = row.amount + reward;
          if(row._id.includes(searchKeyword))
          return <Row key={serial} serial={serial} id={row._id} name={row.packageName}
            principal={row.amount} withdrawal={reward} balance={balance} start={row.startDate}
            payment={row.packageName} action={'Withdraw'} status={row.status} />
        })}
        <div className='flex justify-between p-8 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>
          <div className='text-secondaryText'>Showing 1 to 10 of 21 entries</div>
          <div className='flex gap-4'>
            <button className='p-2 pl-8 pr-8 bg-[#242B2B] rounded-md'>Previous</button>
            <button className='p-2 pl-8 pr-8 bg-primaryColor text-black rounded-md'>Next</button>
          </div>
          <div className='flex gap-4'>
            <div className='text-primaryColor'>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>

    </div>
  )
}
