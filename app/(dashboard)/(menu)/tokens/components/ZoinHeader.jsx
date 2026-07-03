import React from 'react'

export default function ZoinHeader({ handleClick, summary }) {
  return (
    <div className='flex pt-8'>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${summary ? 'text-primaryColor border-primaryColor' : 'border-zinc-800'}`}
          onClick={() => handleClick("summary")}
        >Zoin Summary</button>
        <button
          className={`cursor-pointer border-b w-full flex justify-center pb-2 ${summary ? 'border-zinc-800 ' : 'text-primaryColor'}`}
          onClick={() => handleClick("history")}
        >Zoin wallet History</button>
      </div>
  )
}
