import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  const cards = [
    {
      id: 1,
      image: '/icons/mail.svg',
      text: 'info@toichain.org',
      link: "mailto:info@toichain.org",
    },
    {
      id: 2,
      image: '/icons/whatsappc.svg',
      text: 'Join us on whatsapp',
      link: "https://chat.whatsapp.com/xyz",
    },
    {
      id: 3,
      image: '/icons/telegramc.svg',
      text: 'Join us on Telegram',
      link: "https://t.me/zoichain",
    }
  ]
  return (
    <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
      <div className='mb-8'>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Contact Us
        </div>
        <div className='flex gap-2 justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <div className='text-secondaryText'>Need assistance? Reach out to our support team through email or join our official community channels. We're here to help.</div>
        </div>
      </div>

      <div className='text-primaryText grid grid-cols-3 gap-4'>
        {cards.map(card =>
          <Link key={card.id}
            className="cursor-pointer group border border-zinc-800 rounded-xl p-8 flex flex-col items-center justify-center gap-4 min-h-[180px] transition-all duration-200 hover:border-primaryColor hover:bg-[#0C1414]"
            href={card.link}
          >
            <Image className='h-3 w-3 md:h-6 md:w-6 lg:h-9 lg:w-9 xl:h-12 xl:w-12' alt={card.text} width={48} height={48} src={card.image} />
            <div className='text-[8px] md:text-[14px] lg:text-[20px] xl:text-[24px]'>{card.text}</div>

          </Link>)}
      </div>
    </div>
  )
}
