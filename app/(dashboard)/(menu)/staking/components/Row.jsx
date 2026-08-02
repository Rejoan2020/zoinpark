import React, { useTransition } from 'react'
import Button from '@/app/components/Button'
import { withdraw } from '@/app/actions/staking';
import { useRouter } from "next/navigation";

export default function Row({ serial, id, name, principal, withdrawal, balance, start, status, action, total }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const handleWithdraw = async () => {
    try {
      await withdraw(id);
      startTransition(() => {
        router.refresh();
      });
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className={`grid grid-cols-4 lg:grid-cols-9 lg:grid-cols-[1fr_2fr_1fr_1.5fr_1.5fr_1.5fr_1.5fr_1fr_1fr] items-center text-[8px] md:text-[10px] 
    lg:text-[14px] xl:text-[18px] pl-2 pr-2 xl:pl-4 xl:pr-4 border border-zinc-800 ${serial === 10 || serial === total ? "rounded-b-md" : ""}`}>
      <div className='p-4 max-lg:hidden'>{serial}</div>
      <div className='p-4 flex justify-center '>{id}</div>
      <div className='p-4 flex justify-center max-lg:hidden '>{name}</div>
      <div className='p-4 flex justify-center max-lg:hidden'>{principal.toFixed(4)}</div>
      <div className='p-4 flex justify-center'>{withdrawal.toFixed(4)}</div>
      <div className='p-4 flex justify-center '>{balance.toFixed(4)}</div>
      <div className='p-4 flex justify-center max-lg:hidden'>{start}</div>
      <div className='p-4 flex justify-center max-lg:hidden'>Capital Wallet</div>
      <div className='p-4 flex justify-center'>
        <Button
          onClick={handleWithdraw}
          title={action}
          status={withdrawal > 0 ? true : false}
          isPending={isPending}
        />
      </div>
    </div>
  )
}
