'use client'
import React, { useState } from 'react'
import { updatePassword } from '@/app/actions';

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPass: "",
    newPass: "",
    rePass: ""
  });
  const [err, setErr] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev, [name]: value,
    }))
  }
  async function handleUpdate() {
    const { currentPass, newPass, rePass } = form;
    console.log("In")
    if (rePass !== newPass) {
      setErr('Passwords do not match!');
      return;
    }
    try {
      await updatePassword(form);
    } catch (err) {
      setErr(err.message);
    }
  }
  return (
    <div
      className='flex flex-col gap-6 p-4 text-primaryText text-[16px] xl:text-[18px] max-w-100 w-full'>
      <div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>Change Password</div>
        <div className='text-secondaryText'>Complete the following fields to change the password</div>
      </div>
      <div >
        <div>
          <div>Current Password</div>
          <input
            name='currentPass'
            className='rounded-md text-secondaryText text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-12 lg:h-14 xl:h-16 p-2 mt-2'
            placeholder={'Enter current password'}
            onChange={handleChange}
          />
        </div>
      </div>

      <div >
        <div>
          <div>New Password</div>
          <input
            name='newPass'
            className='rounded-md text-secondaryText text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-12 lg:h-14 xl:h-16 p-2 mt-2'
            placeholder={'Enter new password'}
            onChange={handleChange}
          />
        </div>
      </div>

      <div >
        <div>
          <div>Confirm Password</div>
          <input
            name='rePass'
            className='rounded-md text-secondaryText text-[16px] xl:text-[18px] bg-[#242B2B] w-full h-12 lg:h-14 xl:h-16 p-2 mt-2'
            placeholder={'Re-enter new password'}
            onChange={handleChange}
          />
        </div>
      </div>
      {err && <div className='text-red-500'>{err}</div>}

      <div className='text-[16px] xl:text-[18px]'>
        <button
          className='p-2 pl-6 pr-6 bg-primaryColor text-black m-2'
          onClick={handleUpdate}
        >
          Update
        </button>
        <button className='p-2 pl-6 pr-6 border border-[#242B2B] m-2'>Cancel</button>
      </div>
    </div>
  )
}
