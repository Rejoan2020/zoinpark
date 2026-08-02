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
        <form action={formAction} className='flex max-lg:flex-col gap-2'>
            <input
                name='email'
                type='email'
                placeholder={'Enter email address'}
                className="rounded-md bg-[#242B2B] px-4 py-3 h-[48px] w-full xl:h-[64px] xl:w-[450px]"
            />
            <Button title='Invite' isPending={pending} status={true}/>
        </form>
        {state.message && <p>{state.message}</p>}
        </>
    )
}
