'use client'
import React, { useState } from 'react'

export default function Button({ title, referral }) {
    const referralLink = `${window.location.origin}/signup?ref=${referral}`;
    const copyLink = async () => {
        await navigator.clipboard.writeText(referralLink);
        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    }

    const [copied, setCopied] = useState(false);
    return (
        <button
            onClick={copyLink}
            className={`${copied?'bg-white':'bg-primaryColor'} text-black rounded-md p-2 xl:p-4 cursor-pointer`}
        >
            {copied ? "Copied ✓" : "Copy Link"}
        </button>
    )
}
