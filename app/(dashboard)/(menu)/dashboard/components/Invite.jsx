import Button from '@/app/components/Button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CopyButton from './CopyButton'
import InviteEmailForm from './InviteEmailForm'

export default function Invite({ referral, users, successfulInvites }) {
  const dummy2 = [
    {
      id: 1,
      image: '/icons/mark1.png',
      name: 'Mark boucher',
      amount: '100 ZOINS'
    },
    {
      id: 2,
      image: '/icons/mark2.png',
      name: 'Cark boucher',
      amount: '100 ZOINS'
    },
    {
      id: 3,
      image: '/icons/mark3.png',
      name: 'Dark boucher',
      amount: '100 ZOINS'
    },
    {
      id: 4,
      image: '/icons/mark1.png',
      name: 'Fark boucher',
      amount: '100 ZOINS'
    },
    {
      id: 5,
      image: '/icons/mark2.png',
      name: 'Nark boucher',
      amount: '100 ZOINS'
    },
    {
      id: 6,
      image: '/icons/mark3.png',
      name: 'Lark boucher',
      amount: '100 ZOINS'
    },
    {
      id: 7,
      image: '/icons/mark1.png',
      name: 'Xark boucher',
      amount: '100 ZOINS'
    },
  ]
  let currentTotal = 3;
  if(successfulInvites<3)currentTotal = 3;
  else if(successfulInvites<10) currentTotal = 10;
  else if(successfulInvites<25) currentTotal = 25;
  const referralLink = `${process.env.NEXTAUTH_URL}/signup=${referral}`;

  return (
    <div className='text-secondaryText'>
      <div className='flex border-b border-zinc-800 justify-between'>
        <div className='flex flex-col gap-8 p-2 md:p-4 lg:p-8 xl:p-12 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
          <div>
            <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
              Invite & Earn
            </div>
            <div>
              Invite your friends to join ZoinPark and earn exclusive rewards as they become active members. The more successful referrals you make, the higher your rank and rewards.
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-primaryText'>Referral Link</div>
            <div className='flex gap-2'>
              <input
                readOnly
                value={`${process.env.NEXTAUTH_URL}/signup?ref=${referral}`}
                className="rounded-md bg-[#242B2B] px-4 py-3 h-[40px] w-[350px] md:h-[48px] md:w-[400px] lg:h-[56px] lg:w-[450px] xl:h-[64px] xl:w-[500px]"
              />
              <CopyButton
                title='Copy Link'
                referral={referral}
              />
            </div>
          </div>
          <div className='flex gap-1 md:gap-2 lg:gap-4 xl:gap-8 '>
            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(
                "Join me on ZoinPark!"
              )}`}
              target="_blank"
            >
              <Image
                className='h-[24px] w-[24px] md:h-[32px] md:w-[32px] lg:h-[40px] md:w-[40px] xl:h-[48px] md:w-[48px]'
                height={48}
                width={48}
                src={'/icons/telegramc.svg'}
              />
            </a>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Join me on ZoinPark!\n${referralLink}`
              )}`}
              target="_blank"
            >
              <Image
                className='h-[24px] w-[24px] md:h-[32px] md:w-[32px] lg:h-[40px] md:w-[40px] xl:h-[48px] md:w-[48px]'
                height={48}
                width={48}
                src={'/icons/whatsappc.svg'}
              />
            </a>
            {/* <Image
              className='h-[24px] w-[24px] md:h-[32px] md:w-[32px] lg:h-[40px] md:w-[40px] xl:h-[48px] md:w-[48px]'
              height={48}
              width={48}
              src={'/icons/messengerc.svg'}
            /> */}
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-primaryText'>Invite by Email</div>
            <InviteEmailForm />
          </div>

        </div>
        <div>
          <div className='flex flex-col gap-8 p-2 md:p-4 lg:p-8 xl:p-12 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
            <div>
              <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
                {successfulInvites}/{currentTotal} Invites claimed
              </div>
              <div>
                Complete referral milestones to unlock Bronze, Silver, and Gold rewards. Every successful invite brings you closer to the next tier.
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center justify-between p-4 gradientbg border border-zinc-800 h-[56px] w-[460px] md:h-[64px] md:w-[520px] lg:h-[72px] lg:w-[580px] xl:h-[80px] xl:w-[640px]'>
                <div className='flex flex-row gap-2'>
                  <img
                    className='h-[16px] w-[16px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[40px] xl:w-[40px]'
                    src='/icons/bronze.svg'
                  />
                  <div className='md:pt-[1px] lg:pt-[3px] xl:pt-[6px]'>Bronze</div>
                </div>
                <div>3 Friends - 500 Tons</div>
              </div>
              <div className='flex items-center justify-between p-4 gradientbg border border-zinc-800 h-[56px] w-[460px] md:h-[64px] md:w-[520px] lg:h-[72px] lg:w-[580px] xl:h-[80px] xl:w-[640px]'>
                <div className='flex flex-row gap-2'>
                  <img
                    className='h-[16px] w-[16px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[40px] xl:w-[40px]'
                    src='/icons/silver.svg'
                  />
                  <div className='md:pt-[1px] lg:pt-[3px] xl:pt-[6px]'>Silver</div>
                </div>
                <div>10 Friends - 500 Tons</div>
              </div>
              <div className='flex items-center justify-between p-4 gradientbg border border-zinc-800 h-[56px] w-[460px] md:h-[64px] md:w-[520px] lg:h-[72px] lg:w-[580px] xl:h-[80px] xl:w-[640px]'>
                <div className='flex flex-row gap-2'>
                  <img
                    className='h-[16px] w-[16px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[40px] xl:w-[40px]'
                    src='/icons/gold.svg'
                  />
                  <div className='md:pt-[1px] lg:pt-[3px] xl:pt-[6px]'>Gold</div>
                </div>
                <div>25 Friends - 5000 Tons . <Link href="/premium"> Premium Access </Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col gap-8 p-2 md:p-4 lg:p-8 xl:p-12 pb-8 md:pb-12 lg:pb-16 xl:pb-20 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
          <div>
            <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
              Leaderboard
            </div>
            <div>
              See who holds the most ZOINS and climb the rankings by growing your wallet and staying active in the community.
            </div>
          </div>
          <div>
            {users.map(item =>
              <div key={item.user._id.toString()} className='flex gap-2'>
                <div className='flex items-center justify-between p-4 gradientbg border border-zinc-800 h-[56px] w-[460px] md:h-[64px] md:w-[520px] lg:h-[72px] lg:w-[580px] xl:h-[80px] xl:w-[640px]'>
                  <div className='flex flex-row gap-2'>
                    {item.user?.image?
                    <img
                      className='h-[16px] w-[16px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[40px] xl:w-[40px] rounded-full'
                      src={item.user.image}
                    />:
                    <div className='rounded-full flex items-center justify-center bg-white h-[16px] w-[16px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[40px] xl:w-[40px]'>{item.user.name.charAt(0).toUpperCase()}</div>
                    }
                    <div className='md:pt-[1px] lg:pt-[3px] xl:pt-[6px]'>{item.user.name}</div>
                  </div>
                  <div>{item.balance}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}
