'use client'
import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileFooter() {
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
            name: "Contact Us",
            href: "/helpandsupports/contactus",
            icon: "/icons/contactus.svg",
            activeIcon: "/icons/contactusC.svg",
        },
    ];
    const pathname = usePathname();
    return (
        <>
            {menu.map((m) =>
                <Link
                    className={`${pathname.startsWith(m.url.split("/").slice(0, 2).join("/")) ? "bg-[#0C1414] text-primaryColor" : ""} hover:bg-[#0C1414] flex items-center gap-2 p-6 pl-8 cursor-pointer`}
                    key={m.name}
                    href={m.url}
                >

                    <Image height={24} width={24} alt={m.name} src={m.img} />
                </Link>)}
        </>
    )
}
