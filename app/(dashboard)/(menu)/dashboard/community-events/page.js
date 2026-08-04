import React from 'react'
import CommunityEvents from '../components/CommunityEvents'
import Event from '@/models/Event'

export default async function page() {
  await dbconnect();
  const events = await Event.find().lean();
  return (
    <CommunityEvents events={events} />
  )
}
