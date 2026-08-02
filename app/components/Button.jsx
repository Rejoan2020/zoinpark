'use client'
import React from 'react'

export default function Button({ title, onClick, status, isPending }) {

  return (
    <button
      onClick={onClick}
      className={`${status?'bg-primaryColor text-black cursor-pointer':'bg-[#242B2B] text-[#9F9F9F]'} ${title==='Invite'?'max-lg:h-[48px] max-lg:w-full':''} rounded-md p-2 xl:p-4`}
      disabled = {!status || isPending}
      
    >
      {isPending? title==='Invite'? "Inviting":"Withdrawing...": title }
    </button>
  )
}
