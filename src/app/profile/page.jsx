"use client"
import { EnrollAdded, WishListAdded } from '@/Context/Courescontext';
import { useSession } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { HashLoader } from 'react-spinners';









const ProfilePage = () => {



    const { enroll, setEnroll } = useContext(EnrollAdded)
    const { Wishlist, setWistlish } = useContext(WishListAdded)


    console.log(enroll, 'enroll coures');


    const { data, isPending, refetch } = useSession();
    const user = data?.user


    useEffect(() => {
        refetch();
    }, [refetch])


    if (isPending) {
        return <div className='flex items-center justify-center min-h-screen'>
            <HashLoader color="#456e3e" />
        </div>
    }



    return (
        <div className='bg-[#84b17955] container mx-auto w-[380px] md:w-[600px] lg:w-[700px] rounded-md my-20'>
            <div className=' container mx-auto space-y-4 w-[290px] md:w-[400px] lg:w-[500px] py-10'>
                <div className='bg-white/40  py-10 backdrop-blur-lg border border-white/70 flex flex-col  items-center rounded-md gap-1'>
                    <Avatar className='w-20 h-20 md:w-35 md:h-35 lg:w-35  lg:h-35'>
                        <Avatar.Image alt="John Doe" src={user?.image} />
                        <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
                    </Avatar>
                    <h1 className='text-2xl font-bold mt-3'>{user?.name}</h1>
                    <p className='text-[15px]'>{user?.email}</p>
                    <p className='text-xs'>STUDENT ID: {user?.name.length}SkillSphere999</p>
                </div>
                <div className='bg-white/40 py-6 gap-2 backdrop-blur-lg border border-white/70 flex rounded-md flex-col items-center'>
                    <h1 className='font-semibold text-xl'>Account Settings</h1>
                    <Link href={'/updatedprofile'}>
                        <Button className={'rounded-md bg-linear-to-r from-[#84b179] via-[#a2c098c2] to-[#84b179] text-white font-semibold'} variant='outline'>Update Profile</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;