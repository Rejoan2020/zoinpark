import '@/app/globals.css'
import React from 'react'
import TicketHeader from '../components/ticket/TicketHeader'
import { getTickets } from '@/app/actions/tickets';
import { dbconnect } from '@/lib/mongo';

export default async function page() {
  await dbconnect();
  const tickets = await getTickets();

  return (
    <div>
      <TicketHeader tickets={tickets} />
    </div>
  )
}
