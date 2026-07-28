'use client'
import React, { useState } from 'react'
import Row from './Row'
import Searchbar from '@/app/components/Searchbar';
import ResponseModal from './ResponseModal';

export default function TicketResponse({ tickets }) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [open, setOpen] = useState(false);
  function handleSearch(e) {
    setSearchKeyword(e.target.value);
  }

  let serial = 0;
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
        {tickets.map((row) => {
          serial++
          if (row._id.includes(searchKeyword))
            return <Row key={row._id} serial={serial} id={row._id} subject={row.subject}
              category={row.category} reqDate={row.createdAt} status={row.status} query={row.message}
              resDate={serial} res={'View'} onView={() => {
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
