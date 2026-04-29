
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Navbar = () => {
    return (
        <div className='border-b border-separator bg-white/10 backdrop-blur-md h-18 items-center flex'>
            <nav className="sticky top-0 z-40 w-full px-2  container mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <div className='bg-[#84b179] p-1 rounded-md flex items-center justify-center'>
                            <Image height={40} width={40} alt='logo' src={'https://i.ibb.co.com/v9HNCVg/TEw-Df-removebg-preview.png'}></Image>
                        </div>
                        <h2 className="font-bold text-2xl">Skill<span className='text-[#84b179]'>Sphere</span></h2>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/profile">My Profile</Link></li>
                    </ul>

                    <Button variant='outline' className={'rounded-md h-10 bg-[#84b179] text-white font-bold'}>Log In</Button>
                </header>
            </nav>

        </div>
    );
};

export default Navbar;