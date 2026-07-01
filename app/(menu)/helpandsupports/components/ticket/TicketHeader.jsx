'use client'
import React from 'react'

export default function TicketHeader({handleClick, openaticket}) {
  return (
      <div className='text-secondaryText'> 
      <div className='flex pt-8'>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${openaticket?'text-primaryColor border-primaryColor':'border-zinc-800'}`}
          onClick={() => handleClick("openaticket")}
        >Open A Ticket</button>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${openaticket?'border-zinc-800 ':'text-primaryColor'}`}
          onClick={()=>handleClick("history")}
        >Ticket Responses</button>
      </div>
    </div>
  )
}
