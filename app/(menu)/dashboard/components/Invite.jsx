import Button from '@/app/components/Button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Invite() {
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
  return (
    <div className='text-secondaryText'>
      <div className='flex border-b border-zinc-800 justify-between'>
        <div className='flex flex-col gap-8 p-2 md:p-4 lg:p-8 xl:p-12 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
          <div>
            <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
              Invite & Earn
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-primaryText'>Referral Link</div>
            <div className='flex gap-2'>
              <input
                value={'https://www.toinpark.com/invite/register.php?...'}
                className="rounded-md bg-[#242B2B] px-4 py-3 h-[40px] w-[350px] md:h-[48px] md:w-[400px] lg:h-[56px] lg:w-[450px] xl:h-[64px] xl:w-[500px]"
              />
              <Button title='Copy Link' />
            </div>
          </div>
          <div className='flex gap-1 md:gap-2 lg:gap-4 xl:gap-8 '>
            <Image
              className='h-[24px] w-[24px] md:h-[32px] md:w-[32px] lg:h-[40px] md:w-[40px] xl:h-[48px] md:w-[48px]'
              height={48}
              width={48}
              src={'/icons/whatsappc.svg'}
            />
            <Image
              className='h-[24px] w-[24px] md:h-[32px] md:w-[32px] lg:h-[40px] md:w-[40px] xl:h-[48px] md:w-[48px]'
              height={48}
              width={48}
              src={'/icons/telegramc.svg'}
            />
            <Image
              className='h-[24px] w-[24px] md:h-[32px] md:w-[32px] lg:h-[40px] md:w-[40px] xl:h-[48px] md:w-[48px]'
              height={48}
              width={48}
              src={'/icons/messengerc.svg'}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-primaryText'>Invite by Email</div>
            <div className='flex gap-2'>
              <input
                value={'Enter email address'}
                className="rounded-md bg-[#242B2B] px-4 py-3 h-[40px] w-[350px] md:h-[48px] md:w-[400px] lg:h-[56px] lg:w-[450px] xl:h-[64px] xl:w-[500px]"
                
              />
              <Button title='Send Invite' />
            </div>
          </div>

        </div>
        <div>
          <div className='flex flex-col gap-8 p-2 md:p-4 lg:p-8 xl:p-12 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]'>
            <div>
              <div className='gradient text-[16px] xl:text-[40px] lg:text-[32px] md:text-[24px]'>
                3/10 Invites claimed
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div>
            {dummy2.map(dummy =>
                <div className='flex gap-2'>
                  <div className='flex items-center justify-between p-4 gradientbg border border-zinc-800 h-[56px] w-[460px] md:h-[64px] md:w-[520px] lg:h-[72px] lg:w-[580px] xl:h-[80px] xl:w-[640px]'>
                    <div className='flex flex-row gap-2'>
                      <img
                        className='h-[16px] w-[16px] md:h-[24px] md:w-[24px] lg:h-[32px] lg:w-[32px] xl:h-[40px] xl:w-[40px]'
                        src={dummy.image}
                      />
                      <div className='md:pt-[1px] lg:pt-[3px] xl:pt-[6px]'>{dummy.name}</div>
                    </div>
                    <div>{dummy.amount}</div>
                  </div> 
                </div>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}
