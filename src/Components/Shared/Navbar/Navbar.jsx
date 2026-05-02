"use client"
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Navlink from './Navlink';
import Link from 'next/link';
import { signOut, useSession } from '@/lib/auth-client';
import { HashLoader } from 'react-spinners';


const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { data, isPending, refetch } = useSession()

    const user = data?.user

    useEffect(() => {
        refetch()
    }, [refetch])


    if (isPending) {
        return <div className='flex items-center justify-center '>
            <HashLoader color="#456e3e" size={24} />
        </div>
    }


    const links = <>

        <li><Navlink href="/">Home</Navlink></li>
        <li><Navlink href="/courses">All Courses</Navlink></li>
        <li><Navlink href="/profile">My Profile</Navlink></li>

    </>


    return (




        <div className='border-b  sticky top-0 z-50 border-separator bg-white/10 backdrop-blur-md h-18 items-center flex'>

            <nav className="w-full px-2  container mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                        <Link href='/'>
                            <div className="flex items-center gap-1 md:gap-3 lg:gap-3">
                                <div className='bg-[#84b179] p-1 hidden rounded-md md:flex lg:flex items-center justify-center'>
                                    <Image height={40} width={40} alt='logo' src={'https://i.ibb.co.com/v9HNCVg/TEw-Df-removebg-preview.png'}></Image>
                                </div>
                                <h2 className="font-bold text-[1.10rem] md:text-2xl lg:text-2xl">Skill<span className='text-[#84b179]'>Sphere</span></h2>
                            </div>
                        </Link>
                    </div>
                    <ul className="hidden md:flex lg:flex items-center md:gap-6 lg:gap-6 text-[1rem] text-neutral-500">
                        {links}
                    </ul>
                    {user && <div className='flex items-center gap-2'>
                        <Link href={'/profile'}>
                            <Avatar>
                                <Avatar.Image alt="user img" src={user?.image} />
                                <Avatar.Fallback>JD</Avatar.Fallback>
                            </Avatar></Link>
                        <Button onClick={() => signOut()} variant='outline' className={'rounded-md h-10 bg-[#84b179] text-white md:font-bold lg:font-bold text-xs'}>Log Out</Button>
                    </div>}
                    {
                        !user && <div className='flex flex-row gap-2'>
                            <Link href={'/login'}>
                                <Button variant='outline' className={'rounded-md h-10 border border-gray-300 md:font-bold lg:font-bold'}>Log In</Button></Link>

                            <Link href={'/register'}>
                                <Button variant='outline' className={'rounded-md h-10 bg-linear-to-r from-[#84b179] via-[#a2c098c2] to-[#84b179] w-[90px] md:w-full lg:w-full text-xs text-white lg:text-[0.86rem] md:text-[0.86rem] md:font-bold lg:font-bold'}>Registration</Button></Link>
                        </div>
                    }
                </header>
                {isMenuOpen && (
                    <div className="border-t absolute top-full left-0 bg-white shadow-md  border-t border-separator md:hidden p-4 rounded-md">
                        <ul className="flex gap-2 flex-col">
                            {links}
                        </ul>
                    </div>
                )}

            </nav>
        </div>



    );
};

export default Navbar;