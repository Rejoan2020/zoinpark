import React from 'react'

export default function Header() {
  let loggedin = true;
  return (
    <>
      <div className='h-[96px] bg-background text-primaryText flex justify-between items-center'>
        {
          loggedin?
        <div className='flex justify-start ml-32'>
          Welcome john!
        </div>:<div></div>}
        <div className='flex gap-20 mr-32'>
          <div className='flex justify-end border border-background rounded p-4 pt-2 pb-2 bg-[#032C2D]'>
            Download Whitepaper PDF
          </div>
          <div>
            <img src='/icons/notification.svg' />
          </div>
          <div className='flex'>
            <div>language</div>
            <div>
              <img src='/icons/dropdown.svg' />
            </div>
          </div>
          <div>
            Login
          </div>
        </div>
      </div>
    </>
  )
}
