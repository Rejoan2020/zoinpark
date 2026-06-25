import React from 'react'

export default function Header() {
  let loggedin = false;
  return (
    <>
      <div className='h-[96px] bg-background text-primaryText flex justify-between items-center border-b border-zinc-800'>
        {
          loggedin?
        <div className='flex justify-start ml-32 text-[20px]'>
          Welcome john!
        </div>:<div></div>}
        <div className='flex gap-20 mr-32'>
          <div className='cursor-pointer flex justify-end border border-background rounded p-4 pt-2 pb-2 bg-secondaryColor text-[18px]'>
            Download Whitepaper PDF
          </div>
          <div className='border rounded p-4 pt-2 pb-2 border-secondaryColor cursor-pointer'>
            <img src='/icons/notification.svg' />
          </div>
          <div className='cursor-pointer flex border rounded p-4 pt-2 pb-2 border-secondaryColor text-primaryColor'>
            <div className='text-[16px]'>language</div>
            <div>
              <img src='/icons/dropdown.svg' />
            </div>
          </div>
          <div className='cursor-pointer'>
            Login
          </div>
        </div>
      </div>
    </>
  )
}
