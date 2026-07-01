import React from 'react'

export default function OpenATicket() {
  return (
    <div className='text-secondaryText p-4 md:p-5 lg:p-6 xl:p-7 flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
      <div>
        <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
          Open a ticket
        </div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <div>
        <div className='text-primaryText pb-2'>Category</div>
        <select className='bg-[#242B2B] p-4 w-125'>
          <option>Select a category</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
      </div>
      <div>
        <div className='text-primaryText pb-2'>Subject</div>
        <input className='bg-[#242B2B] p-4 w-125' value={"Enter default subject"}>
        </input>
      </div>
      
      <div>
        <div className='text-primaryText pb-2'>Message</div>
        <input className='bg-[#242B2B] p-4 h-25  w-125' type='text' value={"Write your message here"}>
        </input>
      </div>

      <button className='bg-primaryColor w-125 text-black p-2'>
        Submit
      </button>
    </div>
  )
}
