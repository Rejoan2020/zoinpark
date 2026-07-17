'use client'
import React from 'react'
import Button from '@/app/components/Button'
import { inviteByEmail } from '@/app/actions'
import { useActionState } from 'react';

const initialState = {
    success: false,
    message: "",
};

export default function InviteEmailForm() {
    const [state, formAction, pending] = useActionState(
        inviteByEmail,
        initialState
    );
    return (
        <>
        <form action={formAction} className='flex gap-2'>
            <input
                name='email'
                type='email'
                placeholder={'Enter email address'}
                className="rounded-md bg-[#242B2B] px-4 py-3 h-[40px] w-[350px] md:h-[48px] md:w-[400px] lg:h-[56px] lg:w-[450px] xl:h-[64px] xl:w-[500px]"
            />
            <Button title='Send Invite' />
        </form>
        {state.message && <p>{state.message}</p>}
        </>
    )
}
