'use client'
import React, { useState } from 'react'
import Row from './Row'
import Searchbar from '@/app/components/Searchbar';
import ResponseModal from './ResponseModal';

export default function TicketResponse({ tickets }) {
  const [selectedTicket, setSelectedTicket] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [startIndex, setStartIndex] = useState(1); 
  const rowsPerPage = 10;

  function handleSearch(e) {
    setSearchKeyword(e.target.value);
    setSearchKeyword(1);
  }

  const filteredTickets = tickets.filter((row) =>
    row._id.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const totalPage = Math.ceil(filteredTickets.length / rowsPerPage);
  const slicedTickets = filteredTickets.slice(startIndex - 1, startIndex + rowsPerPage - 1);
  return (
    <div className='text-primaryText'>

      <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Ticket Responses
        </div>
        <div className='flex justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <div className='text-secondaryText'>
            View the conversation history for this ticket, including updates from our support team and your replies.
          </div>
          <Searchbar handleSearch={handleSearch} searchKeyword={searchKeyword} />
        </div>
        <div className='p-4 grid justify-center items-center grid-cols-9 grid-cols-[1fr_2.5fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
          <div className='flex justify-center'>Serial No.</div>
          <div className='flex justify-center'>Ticket No.</div>
          <div className='flex justify-center'>Subject</div>
          <div className='flex justify-center'>Category</div>
          <div className='flex justify-center'>Request Date</div>
          <div className='flex justify-center'>status</div>
          <div className='flex justify-center'>Query</div>
          <div className='flex justify-center'>Response Date</div>
          <div className='flex justify-center'>Response</div>
        </div>
        {tickets.map((row, index) => { 
          return <Row key={row._id} serial={startIndex + index} id={row._id} subject={row.subject}
            category={row.category} reqDate={row.createdAt} status={row.status} query={row.message}
            resDate={'N/A'} res={'View'} onView={() => {
              setSelectedTicket(row);
              setOpen(true);
            }} />
        })}
        <ResponseModal
          open={open}
          ticket={selectedTicket}
          onClose={() => setOpen(false)}
        />
        <div className='flex justify-between p-8 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>
          <div className='text-secondaryText'>Showing {startIndex} to {startIndex + slicedTickets.length - 1} of {filteredTickets.length} entries</div>
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
                  if (i + rowsPerPage > filteredTickets.length) return (1);
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
