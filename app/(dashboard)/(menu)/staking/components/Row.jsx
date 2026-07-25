import React from 'react'
import Button from '@/app/components/Button'
import { withdraw } from '@/app/actions/staking';

export default function Row({ serial, id, name, principal, withdrawal, balance, start, status, action }) {
  const handleWithdraw = async () => {
    try {
      await withdraw(id);
    }catch(err){
      console.log(err.message);
    }
  }
  return (
    <div className={`grid grid-cols-9 grid-cols-[60px_100px_repeat(7,minmax(0,1fr))] lg:grid-cols-[60px_200px_repeat(7,minmax(0,1fr))] items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial === 10 ? "rounded-b-md" : ""}`}>
      <div className='p-4'>{serial}.</div>
      <div className='p-4 flex justify-center '>{id}</div>
      <div className='p-4 flex justify-center  '>{name}</div>
      <div className='p-4 flex justify-center '>{principal}</div>
      <div className='p-4 flex justify-center'>{withdrawal}</div>
      <div className='p-4 flex justify-center '>{balance}</div>
      <div className='p-4 flex justify-center'>{start}</div>
      <div className='p-4 flex justify-center '>Capital Wallet</div>
      <div className='p-4 flex justify-center'>
        <Button
          onClick={handleWithdraw}
          title={action} 
          status = {status}
        />
      </div>
    </div>
  )
}
