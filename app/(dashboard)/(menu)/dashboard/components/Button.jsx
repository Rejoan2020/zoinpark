'use client'
import React from 'react'
import { claimReward } from '@/app/actions/challenges';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useTransition } from 'react';

export default function Button({ challenge, title }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    await claimReward(challenge.challengeId);

    startTransition(() => {
      router.refresh();
    });
  };

  const disabled = challenge.claimed || !challenge.completed;

  console.log(challenge.challenge,challenge.claimed);

  const rewards = {
    "daily-checkin": 5,
    "visit-5": 20,
    "visit-7": 50,
    "refer-1": 20,
    "community-event": 100,
    "stake-100": 100,
  };

  return (
    <div className='flex'>
      <button
        className={`${disabled ? challenge.claimed ? "bg-[#333C3C] text-white font-bold" : "bg-secondaryColor text-white" : "bg-primaryColor cursor-pointer "} text-black rounded-md p-2 text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]`}
        disabled={disabled || isPending}
        onClick={handleClick}
      >
        {disabled ? challenge.claimed ?
          <div className='flex lg:gap-1 justify-center items-center'>
            <Image
              alt='completed'
              height={24}
              width={24}
              src={'/icons/completed.png'}
              className='h-3 w-3 lg:h-6 lg:w-6'
            />
            Completed</div>
          : "Incomplete" : <>{isPending ? "Claiming..." : <>+{title}</>}</>}
      </button>
      {challenge.claimed && <div className='pl-1 lg:pl-2 flex justify-center items-center text-primaryColor text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]'>
        <Image
          alt='gold icon'
          width={16}
          height={16}
          src={'/icons/goldicon2.svg'}
          className='h-2 w-2 lg:h-4 lg:w-4'
        />
        +{rewards[challenge.challengeId]}
      </div>}
    </div>
  )
}
