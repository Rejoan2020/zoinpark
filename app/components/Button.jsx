'use client'
import React from 'react'

export default function Button({ title, onClick, status, isPending }) {

  return (
    <button
      onClick={onClick}
      className={`${status?'bg-primaryColor text-black cursor-pointer':'bg-[#242B2B] text-[#9F9F9F]'}  rounded-md p-2 xl:p-4`}
      disabled = {!status || isPending}
      
    >
      {isPending?"Withdrawing...":title}
    </button>
  )
}
