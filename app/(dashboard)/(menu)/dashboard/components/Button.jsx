'use client'
import React from 'react'
import { claimRewardForDailyCheckIn } from '@/app/actions/challenges';

export default function Button({ challenge, title }) {
  const handleClick = async () => {

    if (challenge.challengeId === "daily-checkin") await claimRewardForDailyCheckIn(challenge.challengeId, 5);
    if (challenge.challengeId === "visit-5") await claimRewardForDailyCheckIn(challenge.challengeId, 20);
    if (challenge.challengeId === "visit-7") await claimRewardForDailyCheckIn(challenge.challengeId, 50);
    if (challenge.challengeId === "refer-1") await claimRewardForDailyCheckIn(challenge.challengeId, 20);
    if (challenge.challengeId === "community-event") await claimRewardForDailyCheckIn(challenge.challengeId, 100);
    if (challenge.challengeId === "stake-100") await claimRewardForDailyCheckIn(challenge.challengeId, 100);
  }
  const disabled = challenge.claimed || !challenge.completed;
  return (
    <button
      className={`${disabled ? "bg-secondaryColor" : "bg-primaryColor cursor-pointer "} text-black rounded-md h-[24px] w-[58px] md:h-[28px] md:w-[66px] lg:h-[36px] lg:w-[74px] xl:h-[40px] xl:w-[83px] text-[8px] md:text-[10px] lg:text-[12px] xl:text-[14px]`}
      disabled={disabled}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
