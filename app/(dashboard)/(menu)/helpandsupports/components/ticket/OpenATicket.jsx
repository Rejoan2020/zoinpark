import React from 'react'
import { createTicket } from '@/app/actions/tickets'

export default function OpenATicket() {

  return (
    <div className='text-secondaryText p-4 md:p-5 lg:p-6 xl:p-7 flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
      <div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Open a ticket
        </div>
        <div>Need help? <br/> Open a support ticket and our team will review your request as soon as possible.
        </div>
      </div>
      <form action={createTicket}  className='flex flex-col gap-6'>
        <div>
          <div className='text-primaryText pb-2'>Category</div>
          <select name="category" className='bg-[#242B2B] p-4 w-125 rounded-md' required>
            <option value="">Select a category</option>
            <option value="Account">Account</option>
            <option value="Wallet">Wallet</option>
            <option value="Staking">Staking</option>
            <option value="Deposit">Deposit</option>
            <option value="Withdrawal">Withdrawal</option>
            <option value="Technical">Technical Issue</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <div className='text-primaryText pb-2'>Subject</div>
          <input
            name="subject"
            className="bg-[#242B2B] p-4 w-125"
            placeholder="Enter ticket subject"
            required
          />
        </div>

        <div>
          <div className='text-primaryText pb-2'>Message</div>
          <textarea
            name="message"
            required
            className="bg-[#242B2B] p-4 h-32 w-125 resize-none rounded-md"
            placeholder="Describe your issue..."
          />
        </div>
        <button className='bg-primaryColor w-125 text-black p-2 rounded-md'>
          Submit Ticket
        </button>
      </form>

    </div>
  )
}
