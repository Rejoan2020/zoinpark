import React from 'react'

export default function Button({title}) {

  return (
    <button className='bg-primaryColor text-black rounded-md p-2 xl:p-4'>
      {title}
    </button>
  )
}
