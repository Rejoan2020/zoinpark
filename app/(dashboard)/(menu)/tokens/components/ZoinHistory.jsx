import React, { useState } from 'react'
import Searchbar from '@/app/components/Searchbar'
import Row from './Row'
export default function ZoinHistory({ transactions }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  }
  let serial = 0;
  return (
    <div className='text-primaryText'>

      <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Zoin wallet history
        </div>
        <div className='flex justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <div className='text-secondaryText'>Monitor your ZOIN wallet activity, review past transactions.</div>
          <Searchbar handleSearch={handleSearch} searchKeyword={searchKeyword} />
        </div>
        <div className='grid grid-cols-7 grid-cols-7 grid-cols-[1fr_1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
          <div className='p-4'>Serial No.</div>
          <div className='p-4 flex justify-center'>Transaction No.</div>
          <div className='p-4 flex justify-center'>Credit</div>
          <div className='p-4 flex justify-center '>Debit</div>
          <div className='p-4 flex justify-center'>Remark</div>
          <div className='p-4 flex justify-center'>Date</div>
          <div className='p-4 flex justify-center'>Status</div>
        </div>
        {transactions.map((row) => {
          serial++;
          const credit = row.type === 'credit' ? row.amount : 0;
          const debit = row.type === 'debit' ? row.amount : 0;
          if (row._id.includes(searchKeyword))
            return <Row key={row._id} serial={serial} id={row._id} credit={Number(credit).toFixed(4)}
              debit={debit.toFixed(4)} desc={row.description} date={row.createdAt} status={row.status}
            />
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
