import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Middle() {
    const cards = [
        {
            id: 1,
            image: '/icons/ticketsC.svg',
            text: 'Tickets',
            link: "/helpandsupports/tickets",
        },
        {
            id: 2,
            image: "/icons/home/zoiac.svg",
            text: 'Zoi announcements',
            link: "/zoi",
        },
        {
            id: 3,
            image: '/icons/contactusC.svg',
            text: 'Contact Us',
            link: "/helpandsupports/contactus",
        },
    ]
    return (
        <>
            <div className='text-primaryText grid grid-cols-2 gap-4 p-4'>
                {cards.map(card =>
                    <Link key={card.id}
                        className="gradientbg cursor-pointer border border-zinc-800 rounded-xl p-2 flex flex-col items-center justify-center gap-4 min-h-[180px] transition-all duration-200 hover:border-primaryColor"
                        href={card.link}
                    >
                        <Image className='' alt={card.text} width={32} height={32} src={card.image} />
                        <div className='text-4 flex justify-center'>{card.text}</div>

                    </Link>)}
            </div>

            <div className='mx-4 mt-8 flex flex-col justify-center items-center gap-2'>
                <div
                    className='text-white cursor-pointer flex items-center justify-center gap-2 border border-background rounded bg-secondaryColor w-full p-2'>
                    <Image height={24} width={24} alt='pdf' src={'/icons/pdf.svg'} /> Download Whitepaper PDF
                </div>
                <div className='text-secondaryText'>
                    To learn more about ZOI network
                </div>
                <Link href={'dummy.com'} className='text-primaryColor underline'>
                    Visit Zoi.network
                </Link>
            </div>

        </>
    )
}
