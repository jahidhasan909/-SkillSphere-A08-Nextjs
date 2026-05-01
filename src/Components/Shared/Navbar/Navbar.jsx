
import { Button } from '@heroui/react';
import Image from 'next/image';


import React from 'react';
import Navlink from './Navlink';
import Link from 'next/link';


const Navbar = () => {







    return (
        <div className='border-b  sticky top-0 z-40 border-separator bg-white/10 backdrop-blur-md h-18 items-center flex'>
            <nav className="
              w-full px-2  container mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    <Link href='/'>
                        <div className="flex items-center gap-3">
                            <div className='bg-[#84b179] p-1 rounded-md flex items-center justify-center'>
                                <Image height={40} width={40} alt='logo' src={'https://i.ibb.co.com/v9HNCVg/TEw-Df-removebg-preview.png'}></Image>
                            </div>
                            <h2 className="font-bold text-2xl">Skill<span className='text-[#84b179]'>Sphere</span></h2>
                        </div>
                    </Link>
                    <ul className="flex items-center gap-6 text-[1rem] text-neutral-500">
                        <li><Navlink href="/">Home</Navlink></li>
                        <li><Navlink href="/courses">All Courses</Navlink></li>
                        <li><Navlink href="/profile">My Profile</Navlink></li>
                    </ul>

                    <Link href={'/login'}>
                        <Button variant='outline' className={'rounded-md h-10 bg-[#84b179] text-white font-bold'}>Log In</Button></Link>
                </header>
            </nav>

        </div>
    );
};

export default Navbar;