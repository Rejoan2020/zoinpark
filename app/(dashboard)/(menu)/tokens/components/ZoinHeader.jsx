'use client'
import React from 'react'
import { useState } from 'react';
import ZoinSummary from './ZoinSummary';
import ZoinHistory from './ZoinHistory';

export default function ZoinHeader({ totalStaking, totalDebits, totalCredits, transactions }) {
  const [summary, setSummary] = useState(true);
  const handleClick = (tab) => {
    if (tab == 'summary') setSummary(true);
    else setSummary(false);
  }
  return (
    <>
      <div className='flex pt-8 text-secondaryText'>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${summary ? 'text-primaryColor border-primaryColor' : 'border-zinc-800'}`}
          onClick={() => handleClick("summary")}
        >Zoin Summary</button>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${summary ? 'border-zinc-800 ' : 'text-primaryColor'}`}
          onClick={() => handleClick("history")}
        >Zoin wallet History</button>
      </div>

      <div className='text-secondaryText'>

        {summary ?
          <ZoinSummary
            totalStaking={totalStaking}
            totalDebits={totalDebits}
            totalCredits={totalCredits}
          />
          : <ZoinHistory transactions={transactions} />}
      </div>
    </>
  )
}
