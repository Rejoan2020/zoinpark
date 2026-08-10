'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { signOutWithGoogle } from '../actions';
import NotificationDropdown from './NoticationDropdown';
import { readAll } from '../actions';

export default function Header({ user, unread, notifications }) {
  const loggedin = !!user;
 
  const path = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const profileMenuRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(unread);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }

      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setProfileMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    setOpen(false);
  }, [path])

  async function handleNotification() {
    setOpen(!open);
    setAlert(0);
    await readAll();
  }

  return (
    <>
      <div className='flex lg:justify-between items-center xl:text-[20px] lg:text-[16px] md:text-[12px] text-[10px] bg-background text-primaryText border-b border-zinc-800 p-1 xl:h-24 lg:h-20 md:h-16 h-12'>

        <div className='lg:hidden'>
          {!loggedin ?
            <Link className='cursor-pointer flex items-center' href={'/signin'}>
              Login
            </Link> :
            <div className='cursor-pointer flex items-center relative'>
              <button className='cursor-pointer' onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {user?.image ?
                  <Image
                    className='rounded-full border w-6 h-6 md:w-8 md:h-8 g:w-10 lg:h-10 xl:w-12 xl:h-12'
                    alt={user?.name}
                    height={48}
                    width={48}
                    src={user?.image} /> :
                  <div
                    className='rounded-full border w-6 h-6 md:w-8 md:h-8 g:w-10 lg:h-10 xl:w-12 xl:h-12 flex justify-center items-center'
                  >{user?.name.charAt(0).toUpperCase()}</div>}
              </button>
              {mobileMenuOpen  &&
                <div className='text-primaryText absolute left-0 top-full mt-2 bg-[#000000] z-50'>
                  <div className='flex h-10 md:h-12 lg:h-14 xl:h-16 p-6 w-31 md:w-35 lg:w-39 xl:w-45 gap-2 items-center'>
                    <Image src={'/icons/settings.svg'} alt='Settings' height={24} width={24} />
                    <Link href={'/user/settings'} >Settings</Link>
                  </div>
                  <div className='border border-zinc-800'></div>

                  <form action={signOutWithGoogle}>
                    <button
                      type="submit"
                      className="flex h-10 md:h-12 lg:h-14 xl:h-16 p-6 w-31 md:w-35 lg:w-39 xl:w-45 gap-2 items-center cursor-pointer"
                    >
                      <Image
                        src="/icons/logout.svg"
                        alt="Log out"
                        width={24}
                        height={24}
                      />
                      <span className="text-red-500">Log Out</span>
                    </button>
                  </form>
                </div>
              }
            </div>
          }
        </div>

        <div className='max-lg:ml-2 min-w-24'>
          {
            loggedin ?
              <div className='gradient flex justify-start'>
                Welcome {user?.name}!
              </div> : <div></div>}
        </div>

        <div className='max-lg:w-full flex gap-4 md:gap-8 lg:gap-12 xl:gap-16'>

          <div
            className='max-lg:hidden cursor-pointer flex items-center justify-evenly border border-background rounded bg-secondaryColor w-[200px] md:w-[220px] lg:w-[249px] xl:w-[279px]
          xl:text-[18px] lg:text-[16px] md:text-[12px] text-[10px]'>
            <Image height={24} width={24} alt='pdf' src={'/icons/pdf.svg'} /> Download Whitepaper PDF
          </div>
          <div className=' max-lg:w-full flex gap-2 justify-end '>
            <div className={`relative flex border rounded xl:p-4 lg:p-2 p-1 border-secondaryColor cursor-pointer`}>

              <button className='cursor-pointer' onClick={() => handleNotification()}>
                {alert === 0 ? <Image
                  className='w-6 h-6'
                  height={24} width={24} alt='notification' src='/icons/notification.svg' />
                  :
                  <div >
                    <div className='absolute -right-2 -top-2 flex justify-center items-center h-4 w-4 lg:h-6 lg:w-6 text-black p-1 border border-white bg-white rounded-full'>{unread}</div>
                    <Image
                      className='w-6 h-6'
                      height={24} width={24} alt='notification!' src={'/icons/notificationalert.svg'} />
                  </div>
                }
              </button>
              {open && (
                <NotificationDropdown notifications={notifications} />
              )}
            </div>

            <div className='hidden cursor-pointer flex items-center border rounded xl:p-4 lg:p-2 p-1 border-secondaryColor text-primaryColor'>
              <div className=''>language</div>
              <Image height={24} width={24} alt='dropdown' src='/icons/dropdown.svg' />
            </div>

            <div className='lg:hidden cursor-pointer flex items-center border rounded xl:p-4 lg:p-2 p-1 border-secondaryColor text-primaryColor'>
              <Image height={24} width={24} alt='dropdown' src='/icons/menu.svg' />
            </div>
          </div>
          
          <div className='max-lg:hidden flex justify-center items-center'>
            {!loggedin ?
              <Link className='cursor-pointer flex items-center' href={'/signin'}>
                Login
              </Link> :
              <div ref={profileMenuRef} className='cursor-pointer flex items-center justify-center relative'>
                <button className='cursor-pointer' onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                  {user?.image ?
                    <Image
                      className='rounded-full border h-10 w-10'
                      alt={user?.name}
                      height={48}
                      width={48}
                      src={user?.image} /> :
                    <div
                      className='rounded-full border w-10 h-10 flex justify-center items-center'
                    >{user?.name.charAt(0).toUpperCase()}</div>}
                </button>
                {profileMenuOpen  &&
                  <div className='text-primaryText absolute right-0 top-full mt-2 bg-[#000000] z-50'>
                    <div className='flex h-10 md:h-12 lg:h-14 xl:h-16 p-6 w-31 md:w-35 lg:w-39 xl:w-45 gap-2 items-center'>
                      <Image src={'/icons/settings.svg'} alt='Settings' height={24} width={24} />
                      <Link href={'/user/settings'} >Settings</Link>
                    </div>
                    <div className='border border-zinc-800'></div>

                    <form action={signOutWithGoogle}>
                      <button
                        type="submit"
                        className="flex h-10 md:h-12 lg:h-14 xl:h-16 p-6 w-31 md:w-35 lg:w-39 xl:w-45 gap-2 items-center cursor-pointer"
                      >
                        <Image
                          src="/icons/logout.svg"
                          alt="Log out"
                          width={24}
                          height={24}
                        />
                        <span className="text-red-500">Log Out</span>
                      </button>
                    </form>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
