'use client'
import React, { useState } from 'react'
import TicketHeader from '../components/ticket/TicketHeader'
import TicketResponse from '../components/ticket/TicketResponse';
import OpenATicket from '../components/ticket/OpenATicket';

export default function page() {
  const [openaticket,setOpenaticket] = useState(true);
  const handleClick = (val)=> {
    if(val=='openaticket'){
      setOpenaticket(true);
    }
    else{
      setOpenaticket(false);
    }
  }
  return (
    <div>
      <TicketHeader handleClick={handleClick} openaticket={openaticket}/>
      {openaticket?<OpenATicket/>:
      <TicketResponse/>}
    </div>
  )
}
