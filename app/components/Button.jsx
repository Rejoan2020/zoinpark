'use client'
import React from 'react'

export default function Button({ title, onClick, status }) {

  return (
    <button
      onClick={onClick}
      className={`${status=='completed'?'bg-gray-100':'bg-primaryColor'} text-black rounded-md p-2 xl:p-4 cursor-pointer`}
    >
      {title}
    </button>
  )
}
