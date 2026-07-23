'use client'
import React, { useState } from 'react'
import { registerForEvent } from '@/app/actions';


export default function RegisterButton({ eventId, initialRegister }) {
    const [isPending, setIsPending] = useState(false); 
    const [registered, setRegistered] = useState(initialRegister);

    async function handleRegister() {
        try {
            setIsPending(true);
            await registerForEvent(eventId); 
            setRegistered(true);
        } finally {
            setIsPending(false);
        }
    }
    
    return (
        <button
            onClick={handleRegister}
            disabled={isPending || registered}
            className={`cursor-pointer p-2 ${registered ? 'bg-gray-300' : 'bg-primaryColor'} text-black rounded-md flex-1`}>
            {registered ? "Registered" : isPending ? "Registering..." : "Register"}
        </button>
    )
}
