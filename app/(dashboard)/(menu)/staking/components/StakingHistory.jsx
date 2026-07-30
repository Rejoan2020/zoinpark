import React, { useState } from 'react'
import Searchbar from '@/app/components/Searchbar'
import Row from './Row'
import { differenceInCalendarDays } from 'date-fns'

export default function StakingHistory({ history, totalStaking }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [startIndex, setStartIndex] = useState(1);
  const rowsPerPage = 10;
  console.log(startIndex)
  function handleSearch(e) {
    setSearchKeyword(e.target.value);
    setSearchKeyword(1);
  }

  const filteredHistory = history.filter((row) =>
    row._id.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const totalPage = Math.ceil(filteredHistory.length / rowsPerPage);
  const slicedHistory = filteredHistory.slice(startIndex - 1, startIndex + rowsPerPage - 1);

  return (
    <div className='text-primaryText'>
      <div className='border-b border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-7 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
        <div className='flex'>
          <ul><li className='list-disc ml-4'></li></ul>
          <div className='gradient'>Total Staking</div>
        </div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>{totalStaking.toFixed(4)} ZOIN</div>
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
        <div className='grid grid-cols-9 grid-cols-[1fr_2fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
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
        {slicedHistory.map((row, index) => {
          const daysPassed = differenceInCalendarDays(
            new Date(),
            row.startDate
          );
          
          const reward = Number((row.amount * (row.dailyProfit / 100) * daysPassed - row.claimedRewards).toFixed(4));
          const balance = row.amount + reward;

          return <Row key={row._id} serial={startIndex + index} id={row._id} name={row.packageName}
            principal={row.amount} withdrawal={reward} balance={balance} start={row.startDate}
            payment={row.packageName} action={'Withdraw'} status={row.status} />
        })}
        <div className='flex justify-between p-8 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>
          <div className='text-secondaryText'>Showing {startIndex} to {startIndex + slicedHistory.length - 1} of {filteredHistory.length} entries</div>
          <div className='flex gap-4'>
            <button
              className='p-2 pl-8 pr-8 bg-[#242B2B] rounded-md'
              onClick={() => {
                return setStartIndex((i) => {
                  if (i - rowsPerPage < 1) return ((totalPage - 1) * rowsPerPage + 1);
                  return (i - rowsPerPage)
                })
              }}

            >Previous</button>
            <button
              className='p-2 pl-8 pr-8 bg-primaryColor text-black rounded-md'
              onClick={() =>
                setStartIndex((i) => {
                  if (i + rowsPerPage > filteredHistory.length) return (1);
                  return (i + rowsPerPage)
                })
              }
            >Next</button>
          </div>
          <div className='flex gap-4'>
            {Array.from({ length: totalPage }, (x, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i * rowsPerPage + 1)}
                className={`${Math.ceil(startIndex / rowsPerPage) === i + 1
                  ? "text-primaryColor"
                  : ""
                  } cursor-pointer`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
