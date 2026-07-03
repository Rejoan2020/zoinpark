import React from 'react'
import Searchbar from '@/app/components/Searchbar'
import Row from './Row'
export default function ZoinHistory() {
    const rows = [
      {
        serial: 1,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 2,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 3,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 4,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 5,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 6,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 8,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 9,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },{
        serial: 10,
        id: 'LJ12314345008980',
        name: "Silver",
        principal: 1000,
        withdrawal: 0,
        balance: 1000,
        start: '2025-05-01',
      },
    ]
    return (
      <div className='text-primaryText'>
        
        <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
          <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
            Zoin wallet history
          </div>
          <div className='flex justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
            <div className='text-secondaryText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <Searchbar />
          </div>
          <div className='grid grid-cols-7 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
            <div className='p-4'>Serial No.</div>
            <div className='p-4 flex justify-center'>Transaction No.</div>
            <div className='p-4 flex justify-center'>Credit(USDT)</div>
            <div className='p-4 flex justify-center '>Debit(USDT)</div>
            <div className='p-4 flex justify-center'>Remark</div>
            <div className='p-4 flex justify-center'>Date</div>
            <div className='p-4 flex justify-center'>Status</div>
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
