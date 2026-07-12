import React from 'react'
import Profile from './components/Profile' 
import { redirect } from 'next/navigation'

export default function page() {
  return ( 
    redirect('/user/settings/profile')
  )
}
