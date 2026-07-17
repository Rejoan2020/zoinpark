'use client'
import React from 'react'

export default function Button({ title, onClick }) {

  return (
    <button
      onClick={onClick}
      className='bg-primaryColor text-black rounded-md p-2 xl:p-4 cursor-pointer'
    >
      {title}
    </button>
  )
}
