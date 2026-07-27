import React from 'react'
import Row from './Row'
import Searchbar from '@/app/components/Searchbar'

export default function TicketResponse() {
  const rows = [
    {
      serial: 1,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    }, {
      serial: 2,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    }, {
      serial: 3,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    },
    {
      serial: 4,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    },
    {
      serial: 5,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    },
    {
      serial: 6,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    },
    {
      serial: 7,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    },
    {
      serial: 8,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    },
    {
      serial: 9,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    },
    {
      serial: 10,
      id: 'LJ12314345008980',
      name: "Silver",
      principal: 1000,
      withdrawal: 0,
      balance: 1000,
      start: '2025-05-01',
      payment: "Capital Wallet",
      action: "withdraw"
    }
  ]
  return (
    <div className='text-primaryText'>

      <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Ticket Responses
        </div>
        <div className='flex justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <div className='text-secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fuga ipsam corporis aliquam repellendus expedita quo commodi molestias at mollitia, sunt, dignissimos ad qui illo aliquid. Neque tempore delectus saepe.</div>
          <Searchbar />
        </div>
        <div className='p-4 grid justify-center items-center grid-cols-9 grid-cols-[1fr_2fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr] text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
          <div >Serial No.</div>
          <div >Staking ID</div>
          <div >Investment Name</div>
          <div >Principal (ZOIN)</div>
          <div >Withdrawable (ZOIN)</div>
          <div >Balance (ZOIN)</div>
          <div >Investment Start</div>
          <div >Payment Mode</div>
          <div >Action</div>
        </div>
        {rows.map((row) => <Row key={row.serial} serial={row.serial} id={row.id} name={row.name}
          principal={row.principal} withdrawal={row.withdrawal} balance={row.balance} start={row.start}
          payment={row.payment} action={row.action} />)}
        <div className='flex justify-between p-8 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>
          <div className='text-secondaryText'>Showing 1 to 10 of 21 entries</div>
          <div className='flex gap-4'>
            <button className='p-2 pl-8 pr-8 bg-[#242B2B] rounded-md'>Previous</button>
            <button className='p-2 pl-8 pr-8 bg-primaryColor text-black rounded-md'>Next</button>
          </div>
          <div className='flex gap-4'>
            <div className='text-primaryColor'>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>

    </div>
  )
}
