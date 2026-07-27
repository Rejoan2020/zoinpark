'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Sidebar() {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const pathname = usePathname();
  const menu = [
    {
      name: "Dashboard",
      url: "/dashboard",
      img: "/icons/dashboard.svg",
      activeIcon: "/icons/home/dashboardac.svg",
    },
    {
      name: "Staking Center",
      url: "/staking",
      img: "/icons/staking.svg",
      activeIcon: "/icons/home/stakingac.svg",
    },
    {
      name: "Tokens",
      url: "/tokens",
      img: "/icons/tokens.svg",
      activeIcon: "/icons/home/tokensac.svg",
    },
    {
      name: "Help & Support",
      url: "/helpandsupports/tickets",
      img: "/icons/support.svg",
      activeIcon: "/icons/home/supportac.svg",
    },
    {
      name: "ZOI Announcements",
      url: "/zoi",
      img: "/icons/zoi.svg",
      activeIcon: "/icons/home/zoiac.svg",
    },
  ];
  const supportSubMenu = [
    {
      name: "Tickets",
      href: "/helpandsupports/tickets",
      icon: "/icons/tickets.svg",
      activeIcon: "/icons/ticketsC.svg",
    },
    {
      name: "Tutorials",
      href: "/helpandsupports/tutorials",
      icon: "/icons/tutorials.svg",
      activeIcon: "/icons/tutorialsC.svg",
    },
    {
      name: "Contact Us",
      href: "/helpandsupports/contactus",
      icon: "/icons/contactus.svg",
      activeIcon: "/icons/contactusC.svg",
    },
  ];
  return (
    <div className='flex flex-col shrink-0 bg-background text-primaryText xl:w-[320px] lg:w-[260px] md:w-[200px] w-[180px] border-r border-zinc-800 text-secondaryText'>
      <Link href={'/'} className='flex border-b border-zinc-800 p-2 xl:p-7 lg:p-5 md:p-3 justify-center xl:h-24 lg:h-20 md:h-16 h-12 cursor-pointer'>
        <Image height={248} width={248} alt='Logo' src='/icons/logo.svg' />
      </Link>
      {menu.map(m => {
        console.log("hihhh : ",m.url.split("/").slice(0, 2).join("/"));
        console.log(m.url)
        return <div
          key={m.name}>
          <Link
            className={`${pathname.startsWith(m.url.split("/").slice(0, 2).join("/")) ? "bg-[#0C1414] text-primaryColor" : ""} hover:bg-[#0C1414] flex items-center gap-2 p-6 pl-8 cursor-pointer`}
            href={m.url}
            onClick={() => {
              if (m.name === 'Help & Support') setIsSubMenuOpen(!isSubMenuOpen);
              else setIsSubMenuOpen(false);
            }}
          >
            <img className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
              src={`${pathname.startsWith(m.url.split("/").slice(0, 2).join("/")) ? m.activeIcon : m.img}`}
            />
            <div className={`text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]`}
            >{m.name}</div>
            {m.name === 'Help & Support' &&
              <img
                className='h-[10px] w-[10px]  md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]'
                src={'/icons/dropdown2.svg'}
              />
            }
          </Link>
          {(m.name === 'Help & Support' && isSubMenuOpen) && (
            <div>
              {supportSubMenu.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 p-4 pl-12 cursor-pointer hover:bg-[#0C1414] ${active ? "text-primaryColor" : ""
                      }`}
                  >
                    <img
                      className="h-[10px] w-[10px] md:h-[16px] md:w-[16px] lg:h-[20px] lg:w-[20px] xl:h-[24px] xl:w-[24px]"
                      src={active ? item.activeIcon : item.icon}
                      alt={item.name}
                    />

                    <div className="text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                      {item.name}
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      }
      )}

    </div>
  )
}
