import React, { useState } from 'react'
import Searchbar from '@/app/components/Searchbar'
import Row from './Row'
export default function ZoinHistory({ transactions }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [startIndex, setStartIndex] = useState(1);
  const rowsPerPage = 10;
  
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    setStartIndex(1);
  }
  const filteredTransactions = transactions.filter((row) =>
    row._id.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const totalPage = Math.ceil(filteredTransactions.length / rowsPerPage);
  const slicedTransaction = filteredTransactions.slice(startIndex - 1, startIndex + rowsPerPage - 1);

  return (
    <div className='text-primaryText max-lg:pb-20'>

      <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Zoin wallet history
        </div>
        <div className='flex max-lg:flex-col max-lg:gap-2 justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <div className='text-secondaryText'>Monitor your ZOIN wallet activity, review past transactions.</div>
          <Searchbar handleSearch={handleSearch} searchKeyword={searchKeyword} />
        </div>
        <div className='grid max-lg:grid-cols-4 lg:grid-cols-7 lg:grid-cols-[1fr_1.5fr_1fr_1fr_1.5fr_1.5fr_1fr] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
          <div className='p-4 max-lg:hidden'>Serial No.</div>
          <div className='p-4 flex justify-center'>Transaction No.</div>
          <div className='p-4 flex justify-center'>Credit</div>
          <div className='p-4 flex justify-center '>Debit</div>
          <div className='p-4 flex justify-center'>Remark</div>
          <div className='p-4 flex justify-center max-lg:hidden'>Date</div>
          <div className='p-4 flex justify-center max-lg:hidden'>Status</div>
        </div>
        {slicedTransaction.map((row, index) => {
          const credit = row.type === 'credit' ? row.amount : 0;
          const debit = row.type === 'debit' ? row.amount : 0;

          return <Row key={row._id} serial={startIndex + index} id={row._id} credit={Number(credit).toFixed(4)}
            debit={debit.toFixed(4)} desc={row.description} date={row.createdAt} status={row.status}
          />
        })}
        <div className='flex justify-between gap-1 p-8 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>
          <div className='text-secondaryText'>Showing {startIndex} to {startIndex + slicedTransaction.length - 1} of {filteredTransactions.length} entries</div>
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
                  if (i + rowsPerPage > filteredTransactions.length) return (1);
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
