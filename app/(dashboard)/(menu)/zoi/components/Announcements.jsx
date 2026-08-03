'use client'
import React, { useState } from 'react'

import Searchbar from '@/app/components/Searchbar';
import Row from './Row';

export default function Announcements({ rows }) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [startIndex, setStartIndex] = useState(1);
    const rowsPerPage = 10;

    const handleSearch = (e) => {
        setSearchKeyword(e.target.value);
        setStartIndex(1);
    }
    const filteredRows = rows.filter((row) =>
        row.subject.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    const totalPage = Math.ceil(filteredRows.length / rowsPerPage);
    const slicedRows = filteredRows.slice(startIndex - 1, startIndex + rowsPerPage - 1);
    return (
        <div className='text-primaryText'>

            <div className='p-4 md:p-5 lg:p-6 xl:p-7'>
                <div className='gradient text-[24px] md:text-[32px] lg:text-[40px] xl:text-[48px]'>
                    ZOI Announcements
                </div>
                <div className='flex justify-between max-lg:flex-col max-lg:gap-2 text-[12px] md:text-[16px] lg:text-[20px] xl:text-[24px]'>
                    <div className='text-secondaryText'>You can withdraw your principal USDT after 30 days</div>
                    <Searchbar handleSearch={handleSearch} searchKeyword={searchKeyword} />
                </div>
                <div className='grid grid-cols-5 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] bg-[#032E2F] mt-4'>
                    <div className='p-4'>Serial No.</div>
                    <div className='p-4 flex justify-center '>subject</div>
                    <div className='p-4 flex justify-center '>Posted date</div>
                    <div className='p-4 flex justify-center '>Time</div>
                    <div className='p-4 flex justify-center'>Details</div>
                </div>
                {slicedRows.map((row, index) => {

                    const date = row.createdAt.toLocaleDateString().toString();
                    const time = row.createdAt.toLocaleTimeString().toString();

                    return <Row key={row._id.toString()} serial={startIndex + index} subject={row.subject} date={date}
                        time={time} details={row.details} />
                })}
                <div className='flex justify-between p-8 text-[8px] md:text-[10px] lg:text-[14px] xl:text-[18px] max-lg:gap-1'>
                    <div className='text-secondaryText'>Showing {startIndex} to {startIndex + slicedRows.length - 1} of {filteredRows.length} entries</div>
                    <div className='flex gap-4'>
                        <button
                            className='cursor-pointer p-2 pl-8 pr-8 bg-[#242B2B] rounded-md'
                            onClick={() => {
                                return setStartIndex((i) => {
                                    if (i - rowsPerPage < 1) return ((totalPage - 1) * rowsPerPage + 1);
                                    return (i - rowsPerPage)
                                })
                            }}

                        >Previous</button>
                        <button
                            className='cursor-pointer p-2 pl-8 pr-8 bg-primaryColor text-black rounded-md'
                            onClick={() =>
                                setStartIndex((i) => {
                                    if (i + rowsPerPage > filteredRows.length) return (1);
                                    return (i + rowsPerPage)
                                })
                            }
                        >Next</button>
                    </div>
                    <div className='flex gap-4'>
                        {Array.from({ length: totalPage }, (x, i) => (
                            <button
                                key={i}
                                onClick={() => setStartIndex(i * rowsPerPage + 1)}
                                className={`${Math.ceil(startIndex / rowsPerPage) === i + 1
                                    ? "text-primaryColor"
                                    : ""
                                    } cursor-pointer`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
