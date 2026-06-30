'use client'
import React from 'react'
import ZoinHeader from './components/ZoinHeader'
import { useState } from 'react';
import ZoinSummary from './components/ZoinSummary';
import ZoinHistory from './components/ZoinHistory';

export default function page() {
  const [summary, setSummary] = useState(true);
  const handleClick = (tab) => {
    if (tab == 'summary') setSummary(true);
    else setSummary(false);
  }
  return (
    <div className='text-secondaryText'>
      <ZoinHeader handleClick={handleClick} summary={summary}/>
      {summary?<ZoinSummary/>:<ZoinHistory/>}
    </div>
  )
}
