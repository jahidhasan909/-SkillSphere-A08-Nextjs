"use client"
import EnrollCard from '@/Components/EnrollWishlistCards/EnrollCard';
import WishlistCard from '@/Components/EnrollWishlistCards/WishlistCard';
import { EnrollAdded, WishListAdded } from '@/Context/Courescontext';
import { useSession } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { HashLoader } from 'react-spinners';









const ProfilePage = () => {



    const { enroll, setEnroll } = useContext(EnrollAdded)
    const { Wishlist, setWistlish } = useContext(WishListAdded)










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
        <div className='bg-[#84b17955] container grid-cols-1 md:grid-cols-1 grid lg:grid-cols-2 mx-auto  rounded-md my-20'>
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



            <div className='bg-white/40 backdrop-blur-lg px-4 py-10 rounded-r-md'>
                <div className='flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2'>
                    <div className='bg-[#4d794655] text-center shadow  py-2 rounded-md'>
                        <h1 className='text-xl font-bold '>Enrolled <span className='text-[#4d7946]'>Courses</span></h1>
                    </div>
                    {enroll.length === 0 ?
                        <div className='text-center my-5 text-neutral-500'>
                            <p>You haven't enrolled in any course yet !</p>
                        </div>
                        :
                        enroll.map(enrolls => <EnrollCard key={enrolls.id} enrolls={enrolls}></EnrollCard>)
                    }
                </div>
                <div className='flex flex-col gap-3 mt-4  max-h-[300px] overflow-y-auto pr-2'>
                    <div className='bg-[#4d794655] text-center shadow  py-2 rounded-md'>

                        <h1 className='text-xl font-bold'>Wishlist <span className='text-[#4d7946]'>Courses</span></h1>
                    </div>
                    {Wishlist.length === 0 ?
                        <div className='text-center my-5 text-neutral-500'>
                            <p>Your wishlist is empty !</p>
                        </div>
                        :
                        Wishlist.map(wishlist => <WishlistCard key={wishlist.id} wishlist={wishlist}></WishlistCard>)
                    }
                </div>

            </div>
        </div>


    );
};

export default ProfilePage;