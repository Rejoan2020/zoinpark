import React from 'react'
import Searchbar from '@/app/components/Searchbar'
import Row from './Row'

export default function StakingHistory() {
  const rows = [
    {
      serial: 1,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },{
      serial: 2,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },{
      serial: 3,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },
    {
      serial: 4,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },
    {
      serial: 5,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },
    {
      serial: 6,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },
    {
      serial: 7,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },
    {
      serial: 8,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },
    {
      serial: 9,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    },
    {
      serial: 10,
      id: 'LJ12314345008980', 
      name:"Silver", 
      principal: 1000, 
      withdrawal: 0, 
      balance: 1000, 
      start : '2025-05-01', 
      payment: "Capital Wallet", 
      action: "withdraw"
    }
  ]
  return (
    <div className='text-primaryText'>
      <div className='border-b border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-7 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
        <div className='flex'>
          <ul><li className='list-disc ml-4'></li></ul>
          <div className='gradient'>Total Staking</div>
        </div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>25,578.00 ZOIN</div>
      </div>
      <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Staking history
        </div>
        <div className='flex justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
          <div className='text-secondaryText'>You can withdraw your principal USDT after 10days</div>
          <Searchbar />
        </div>
        <div className='flex text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px] bg-[#032E2F] mt-4'>
          <div className='p-4'>Serial No.</div>
          <div className='p-4'>Staking ID</div>
          <div className='p-4'>Investment Name</div>
          <div className='p-4'>Principal(ZOIN)</div>
          <div className='p-4'>Withdrawal(ZOIN)</div>
          <div className='p-4'>Balance(ZOIN)</div>
          <div className='p-4'>Investment Start</div>
          <div className='p-4'>Payment Mode</div>
          <div className='p-4'>Action</div>
        </div>
        {rows.map((row)=><Row key={row.serial} serial = {row.serial} id = {row.id} name = {row.name}
         principal = {row.principal} withdrawal = {row.withdrawal} balance = {row.balance} start = {row.start}
          payment = {row.payment} action = {row.action} />)}
      </div>

    </div>
  )
}
