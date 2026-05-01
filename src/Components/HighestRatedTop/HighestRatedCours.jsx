"use client"
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';


const HighestRatedCours = ({ topCouress }) => {


    if (!topCouress) {
        return <div className='flex items-center justify-center min-h-screen'>
            <HashLoader color="#456e3e" />
        </div>
    }


    return (
        <div className=''>
        

                <Card className="rounded-md bg-white/40 border border-white/87 backdrop-blur-3xl shadow-md" variant="">
                    <Card.Header className='space-y-1'>
                        <div className='relative w-full h-[180px] overflow-hidden rounded-md'>
                            <Image src={topCouress?.image} height={180} width={400} className='object-contain ' alt='coures img'></Image>
                        </div>
                        <Card.Description>{topCouress?.category}</Card.Description>
                        <Card.Title className='font-bold text-[17px]'>{topCouress?.title}</Card.Title>
                        <Card.Content>
                            <Card.Description>Instructor : {topCouress?.instructor}</Card.Description>
                            <div className='border-b my-2 text-[#84b179]'></div>
                            <div className='flex items-center justify-between'>
                                <p className='flex items-center gap-1'><span className='text-orange-300'><FaStar /></span> {topCouress?.rating}</p>
                                <p className='text-neutral-500 text-[15px]'>{topCouress?.duration}</p>

                                <Link href={`/courses/${topCouress?.id}`}>
                                    <Button className={' rounded-md bg-[#84b179] text-white'} variant='outline'>View Details</Button>
                                </Link>
                            </div>
                        </Card.Content>
                    </Card.Header>
                </Card>
            
        </div>
    );
};

export default HighestRatedCours;