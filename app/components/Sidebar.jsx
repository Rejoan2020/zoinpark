'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Sidebar() { 
  const [activeDashbord, setActiveDashboard] = useState(false);
  const [activeStaking, setActiveStaking] = useState(false);
  const [activeTokens, setActiveTokens] = useState(false);
  const [activeSupport, setActiveSupport] = useState(false);
  const [activeZoi, setActiveZoi] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const [activeTickets, setActiveTickets] = useState(false);
  const [activeTutorials, setActiveTutorials] = useState(false);
  const [activeContact, setActiveContact] = useState(false); 

  return (
    <div className='flex flex-col shrink-0 bg-background text-primaryText xl:w-[320px] lg:w-[260px] md:w-[200px] w-[180px] border-r border-zinc-800 text-secondaryText'>
      <Link href={'/'} className='flex border-b border-zinc-800 p-2 xl:p-7 lg:p-5 md:p-3 justify-center xl:h-[96px] lg:h-[80px] md:h-[64px] h-[48px] cursor-pointer'><img src='/icons/logo.svg' /></Link>
      <Link
        className={`${activeDashbord ? "bg-[#0C1414] text-primaryColor" : ""} flex items-center gap-2 p-6 pl-8 cursor-pointer`}
        onClick={() => { setActiveDashboard(true); setActiveStaking(false); setActiveSupport(false); setActiveTokens(false); setSubMenu(false); setActiveZoi(false) }}
        href={'/dashboard'}
      >
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]' src='/icons/dashboard.svg' />
        <div className={`text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]`}
        >Dashboard</div>
      </Link>

      <Link
        className={`${activeStaking ? "bg-[#0C1414] text-primaryColor" : ""} flex items-center gap-2 p-6 pl-8 cursor-pointer`}
        onClick={() => { setSubMenu(false); setActiveDashboard(false); setActiveStaking(true); setActiveSupport(false); setActiveTokens(false); setActiveZoi(false) }}
        href={'/staking'}
      >
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/staking.svg' />
        <div
          className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'
        >Staking center</div>

      </Link>

      <Link
        className={`${activeTokens ? "bg-[#0C1414] text-primaryColor" : ""} flex items-center gap-2 p-6 pl-8 cursor-pointer`}
        onClick={() => { setSubMenu(false); setActiveDashboard(false); setActiveStaking(false); setActiveSupport(false); setActiveTokens(true); setActiveZoi(false) }}
        href={'/tokens'}
      >
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/tokens.svg' />
        <div
          className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'
        >Tokens</div>
      </Link>
      <div>
        <Link
          className={`${activeSupport ? "bg-[#0C1414] text-primaryColor" : ""} flex items-center gap-2 p-6 pl-8 cursor-pointer`}
          onClick={() => { setSubMenu(!subMenu); setActiveDashboard(false); setActiveStaking(false); setActiveSupport(true); setActiveTokens(false); setActiveZoi(false); setActiveTickets(true); }}
          href={'/helpandsupports/tickets'}
        >
          <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/support.svg' />
          <div
            className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'
          >Help & Supports</div>
          <img
            className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
            src='/icons/dropdown2.svg'
          />
        </Link>

        {subMenu &&
          <div>
            <Link
              className={`${activeTickets ? "text-primaryColor" : ""} flex items-center gap-2 p-4 pl-12 cursor-pointer`}
              onClick={() => { setActiveTickets(true); setActiveTutorials(false); setActiveContact(false); }}
              href={'/helpandsupports/tickets'}
            >
              {activeTickets?
              <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/ticketsC.svg' />
              :<img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/tickets.svg' />}
              <div
                className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'
              >Tickets</div>
            </Link>
            <Link
              className={`${activeTutorials ? "text-primaryColor" : ""} flex items-center gap-2 p-4 pl-12 cursor-pointer`}
              onClick={() => { setActiveTickets(false); setActiveTutorials(true); setActiveContact(false); }}
              href={'/helpandsupports/tutorials'}
            >
              {activeTutorials?
              <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/tutorialsC.svg' />
              :<img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/tutorials.svg' />}
              <div
                className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'
              >Tutorials</div>
            </Link>
            <Link
              className={`${activeContact ? "text-primaryColor" : ""} flex items-center gap-2 p-4 pl-12 cursor-pointer`}
              onClick={() => { setActiveTickets(false); setActiveTutorials(false); setActiveContact(true); }}
              href={'/helpandsupports/contactus'}
            >
              {activeContact?
              <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/contactusC.svg' />
              :<img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/contactus.svg' />}
              <div
                className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'
              >Contact Us</div>
            </Link>
          </div>}
      </div>
      <Link
        className={`${activeZoi ? "text-primaryColor" : ""} flex items-center gap-2 p-6 pl-8 cursor-pointer`}
        onClick={() => { setSubMenu(false); setActiveDashboard(false); setActiveStaking(false); setActiveSupport(false); setActiveTokens(false); setActiveZoi(true) }}
        href={'/zoi'}
      >
        <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px] ' src='/icons/zoi.svg' />
        <div
          className='text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]'
        >ZOI Announcements</div>
      </Link>
    </div>
  )
}
