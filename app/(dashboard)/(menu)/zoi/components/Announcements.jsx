'use client'
import React, { useState } from 'react'

import Searchbar from '@/app/components/Searchbar';
import Row from './Row';

export default function Announcements({ rows }) {
    const [searchKeyword, setSearchKeyword] = useState('');
    function handleSearch(e) {
        setSearchKeyword(e.target.value);
    }
    let serial = 0;
    return (
        <div className='text-primaryText'>

            <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
                <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
                    ZOI Announcements
                </div>
                <div className='flex justify-between text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
                    <div className='text-secondaryText'>You can withdraw your principal USDT after 10days</div>
                    <Searchbar handleSearch={handleSearch} searchKeyword={searchKeyword} />
                </div>
                <div className='grid grid-cols-5 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
                    <div className='p-4'>Serial No.</div>
                    <div className='p-4 flex justify-center '>subject</div>
                    <div className='p-4 flex justify-center '>Posted date</div>
                    <div className='p-4 flex justify-center '>Time</div>
                    <div className='p-4 flex justify-center'>Details</div>
                </div>
                {rows.map((row) => {
                    serial++;
                    const date = row.createdAt.toLocaleDateString().toString();
                    const time = row.createdAt.toLocaleTimeString().toString();
                    if(row.subject.toLowerCase().includes(searchKeyword.toLowerCase()))
                    return <Row key={row._id.toString()} serial={serial} subject={row.subject} date={date}
                        time={time} details={row.details} />
                })}
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
