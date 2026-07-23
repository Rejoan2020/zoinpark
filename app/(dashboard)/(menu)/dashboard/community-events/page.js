import React from 'react'
import CommunityEvents from '../components/CommunityEvents'
import Event from '@/models/Event'

export default async function page() {
  const events = await Event.find().lean(); 
  return (
    <CommunityEvents events = {events}/>
  )
}
