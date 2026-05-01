import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';


const AllCouresCard = ({ allCouress }) => {
    if (!allCouress) {
        return <div className='flex items-center justify-center min-h-screen'>
            <HashLoader color="#456e3e" />
        </div>
    }
    return (
        <div>

            
            <Card className="rounded-md bg-white/40 border border-white/87 backdrop-blur-3xl shadow-lg" variant="">
                <Card.Header className='space-y-1'>
                    <div className='relative w-full h-[180px] overflow-hidden rounded-md'>
                        <Image src={allCouress?.image} width={400} height={180} className='object-contain' alt='coures img'></Image>
                    </div>
                    <Card.Description>{allCouress?.category}</Card.Description>
                    <Card.Title className='font-bold text-[17px]'>{allCouress?.title}</Card.Title>
                    <Card.Content>
                        <Card.Description>Instructor : {allCouress?.instructor}</Card.Description>
                        <div className='border-b my-2 text-[#84b179]'></div>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center gap-1'><span className='text-orange-300'><FaStar /></span> {allCouress?.rating}</p>
                            <p className='text-neutral-400   text-[15px]'>{allCouress?.duration}</p>
                            <Link href={`/courses/${allCouress?.id}`}>
                                <Button className={' rounded-md bg-[#84b179] text-white'} variant='outline'>View Details</Button>
                            </Link>
                        </div>
                    </Card.Content>
                </Card.Header>
            </Card>
        </div>
    );
};

export default AllCouresCard;