import React from 'react'

export default function Sidebar() {
  return (
    <div className='flex flex-col bg-background text-primaryText w-[320px] h-full border-r border-zinc-800 text-secondaryText'>
      <div className='flex border-b border-zinc-800 p-7 justify-center h-[96px] cursor-pointer'><img src='/icons/logo.svg'/></div>
      <div className='flex gap-2 p-6 pl-8 cursor-pointer'><img src='/icons/dashboard.svg'/>Dashboard</div>
      <div className='flex gap-2 p-6 pl-8 cursor-pointer'><img src='/icons/staking.svg'/>Staking center</div>
      <div className='flex gap-2 p-6 pl-8 cursor-pointer'><img src='/icons/tokens.svg'/>Tokens</div>
      <div className='flex gap-2 p-6 pl-8 cursor-pointer'><img src='/icons/support.svg'/>Help & Supports</div>
      <div className='flex gap-2 p-6 pl-8 cursor-pointer'><img src='/icons/zoi.svg'/>ZOI Announcements</div>
    </div>
  )
}
