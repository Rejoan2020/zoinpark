import React from 'react'
import TicketHeader from '../components/ticket/TicketHeader' 
import { getTickets } from '@/app/actions/tickets'; 
import Middle from '../components/intermediate/Middle';


export default async function page() {
  const tickets = await getTickets();

  return (
    <>
      <div className='max-lg:hidden'>
        <TicketHeader tickets={tickets} />
      </div>
      <div className='lg:hidden'>
        <Middle/>
      </div>
    </>
  )
}
