import Image from 'next/image'
import React, { useState } from 'react';
import { createStake } from '@/app/actions/staking';

export default function Card({ _id, name, minAmount, maxAmount, dailyProfit, duration, apy, active }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("Select pay mode");
  const [amount, setAmount] = useState(0);
  const [err, setErr] = useState("");
  const [modeErr, setModeErr] = useState("");
  const [serverErr, setServerErr] = useState("");
  const [success, setSuccess] = useState("");
  async function handleStake() {
    setServerErr("");
    setSuccess("")
    if (amount < minAmount) { setErr("Minimum amount not reached !"); }
    else if (amount > maxAmount) { setErr("Maximum amount exceeded !"); }
    else setErr("");
    if (selected === "Select pay mode") { setModeErr("Select any pay mode!") }
    else setModeErr("");

    if (amount < minAmount || amount > maxAmount || selected === "Select pay mode") {
      return;
    }
    try {
      await createStake(_id, amount, selected);
      setSuccess("Stake created successfully!");
      setAmount(0);
      setSelected("Select pay mode");
    } catch (err) {
      setServerErr(err.message);
    }
  }

  function handleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 xl:gap-5 border border-zinc-800 p-4 md:p-5 lg:p-6 xl:p-8 bg-[#0C1110] h-[224px] w-[250px] md:h-[300px] md:w-[330px] lg:h-[374px] lg:w-[391px] xl:h-[450px] xl:w-[510px]'>
      <div>
        <div className={`${name == 'Gold' ? 'text-[#F5E083]' : name == "Diamond" ? "text-[#8FD4F4]" : ""} text-[18px] md:text-[24px] lg:text-[30px] xl:text-[36px]`}>{name}</div>
        <div className="flex items-center gap-1 text-secondaryText text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]">
          <Image
            src="/icons/goldicon.png"
            alt="Gold Icon"
            width={16}
            height={16}
            className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5"
          />
          <div>{minAmount} ZOIN TO {maxAmount} ZOIN</div>
        </div>
      </div>
      <div className='border-b border-zinc-800'></div>
      <div>
        <div className='flex'>
          <Image className='h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6' height={24} width={24} alt='right' src={'/icons/right.svg'} />
          <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>Daily profit: {dailyProfit}%</div>
        </div>
        <div className='flex'>
          <Image className='h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6' height={24} width={24} alt='right' src={'/icons/right.svg'} />
          <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>{duration}</div>
        </div>
      </div>
      <div
        className='cursor-pointer flex flex-col relative'
      >
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='text-black font-bold bg-white mb-2 border p-2 w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px]'
        />
        {err && <div className='text-red-500 text-[8px] lg:text-[12px]'>{err}</div>}
        <div
          onClick={handleDropdown}
          className='flex h-full justify-between items-center p-2 bg-[#242B2B] w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px]'>
          <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>{selected}</div>
          <Image alt='drown down array' height={12} width={12} src={"/icons/dropdown2.svg"} />
        </div>
        {modeErr && <div className='text-red-500 text-[8px] lg:text-[12px]'>{modeErr}</div>}
        {isDropdownOpen && <div className='absolute top-full left-0 w-full z-10'>
          <div
            onClick={() => { setSelected('USDT'); setIsDropdownOpen(!isDropdownOpen) }}
            className='z-1 bg-secondaryBackground hover:bg-secondaryColor w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px] border border-zinc-800 flex justify-between items-center p-4 '>
            <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>USDT</div>
          </div>

          <div
            onClick={() => { setSelected('ZOIN'); setIsDropdownOpen(!isDropdownOpen) }}
            className='z-1 bg-secondaryBackground hover:bg-secondaryColor w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px] border border-zinc-800 flex w-full h-full justify-between items-center p-4 '>
            <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>ZOIN</div>
          </div>

          <div
            onClick={() => { setSelected('TAKA'); setIsDropdownOpen(!isDropdownOpen) }}
            className='z-1 bg-secondaryBackground hover:bg-secondaryColor w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px] border border-zinc-800 flex w-full h-full justify-between items-center p-4 '>
            <div className='text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>TAKA</div>
          </div>
        </div>}
      </div>

      <button
        onClick={handleStake}
        className='cursor-pointer bg-primaryColor text-black w-[140px] h-[18px] md:w-[230px] md:h-[28px] lg:w-[320px] lg:h-[38px] xl:w-[410px] xl:h-[48px] flex justify-center md:p-2 items-center text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px]'>
        Stake
      </button>

      {serverErr && <div className='text-red-500 text-[8px] lg:text-[12px]'>{serverErr}</div>}
      {success && <div className='text-green-500'>{success}</div>}
    </div>
  )
}
