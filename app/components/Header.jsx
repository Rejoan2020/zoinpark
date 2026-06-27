import React from 'react'

export default function Header() {
  let loggedin = true;
  return (
    <>
      <div className='xl:text-[20px] l:text-[16px] md:text-[12px] text-[10px] xl:h-[96px] l:h-[80px] md:h-[64px] h-[48px] bg-background text-primaryText flex justify-between items-center border-b border-zinc-800'>
        {
          loggedin?
        <div className='gradient flex justify-start xl:ml-32 l:ml-20 md:ml-8'>
          Welcome Ryan!
        </div>:<div></div>}
        <div className='flex md:gap-4 lg:gap-8 xl:gap-20 mr-32'>
          <div className='cursor-pointer flex items-center justify-end border border-background rounded p-4 pt-2 pb-2 bg-secondaryColor'>
            Download Whitepaper PDF
          </div>
          <div className='flex border rounded xl:p-4 l:p-2 md:p-1 p-0 pt-2 pb-2 border-secondaryColor cursor-pointer'>
            <img src='/icons/notification.svg' />
          </div>
          <div className='cursor-pointer flex items-center border rounded xl:p-4 l:p-2 md:p-1 p-0 pt-2 pb-2 border-secondaryColor text-primaryColor'>
            <div className=''>language</div>
            <div>
              <img src='/icons/dropdown.svg' />
            </div>
          </div>
          <div className='cursor-pointer flex items-center'>
            Login
          </div>
        </div>
      </div>
    </>
  )
}
