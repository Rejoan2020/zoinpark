'use client'
import React, { useState } from 'react'

export default function CopyLinkEvents({registrationLink}) {
    const [copied, setCopied] = useState(false);
    const copyLink = async () => {
        await navigator.clipboard.writeText(registrationLink);
        setCopied(true); 
        setTimeout(() => setCopied(false), 2000);
    }
    return (
        <button onClick={copyLink} className='cursor-pointer p-2 bg-white text-black rounded-md flex-1'>
            {copied ? "Copied" : "Copy Link"}
        </button>
    )
}
