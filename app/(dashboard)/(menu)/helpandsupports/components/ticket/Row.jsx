import React from 'react'
import Button from '@/app/components/Button'

export default function Row({ serial, id, name, principal, withdrawal, balance, start, payment, action }) {
  return (
    <div className={`p-4 grid grid-cols-9 grid-cols-[1fr_2fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr] items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial === 10 ? "rounded-b-md" : ""}`}>
      <div >{serial}</div>
      <div >{id}</div>
      <div >{name}</div>
      <div >{principal.toFixed(4)}</div>
      <div >{withdrawal.toFixed(4)}</div>
      <div >{balance.toFixed(4)}</div>
      <div >{start}</div>
      <div >Capital Wallet</div>
      <div >
        <Button
          // onClick={handleWithdraw}
          title={action}
          status={withdrawal > 0 ? true : false}
        // isPending = {isPending}
        />
      </div>
    </div>
  )
}
