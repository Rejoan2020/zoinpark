 import React from 'react'
import TicketHeader from '../components/ticket/TicketHeader'
import TicketResponse from '../components/ticket/TicketResponse';
import OpenATicket from '../components/ticket/OpenATicket';  
import { getTickets } from '@/app/actions/tickets';
 

export default async function page() { 
  const tickets = await getTickets();
  
  return (
    <div>
      <TicketHeader tickets={tickets}/>
    </div>
  )
}
