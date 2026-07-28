'use client'
import React from 'react'
import { useState } from 'react';
import OpenATicket from './OpenATicket';
import TicketResponse from './TicketResponse';
export default function TicketHeader({ tickets }) {

  const [openaticket, setOpenaticket] = useState(true);
  const handleClick = (val) => {
    if (val == 'openaticket') {
      setOpenaticket(true);
    }
    else {
      setOpenaticket(false);
    }
  }

  return (
    <div className='text-secondaryText'>
      <div className='flex pt-8'>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${openaticket ? 'text-primaryColor border-primaryColor' : 'border-zinc-800'}`}
          onClick={() => handleClick("openaticket")}
        >Open A Ticket</button>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${openaticket ? 'border-zinc-800 ' : 'text-primaryColor'}`}
          onClick={() => handleClick("history")}
        >Ticket Responses</button>
      </div>
      {openaticket ? <OpenATicket /> : <TicketResponse tickets={tickets}/>}
    </div>
  )
}
