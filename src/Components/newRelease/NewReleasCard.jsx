import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';

const NewReleasCard = ({ newReleas }) => {

    if (!newReleas) {
        return <div className='flex items-center justify-center min-h-screen'>
            <HashLoader color="#456e3e" />
        </div>
    }


    return (
        <div className=''>


            <Card className="rounded-md bg-white/40 border border-white/87 backdrop-blur-3xl shadow-md" variant="">
                <Card.Header className='space-y-1'>
                    <Chip className=' absolute z-50 -rotate-45 bg-[#84b179] text-white font-semibold top-9 left-0  animate-pulse rounded-md flex justify-center  w-[90px]'>New</Chip>
                    <div className='relative w-full h-[180px] overflow-hidden rounded-md'>
                        <Image src={newReleas?.image} height={180} width={400} className='object-contain ' alt='coures img'></Image>
                    </div>
                    <Card.Description>{newReleas?.category}</Card.Description>
                    <Card.Title className='font-bold text-[17px]'>{newReleas?.title}</Card.Title>
                    <Card.Content>
                        <Card.Description>Instructor : {newReleas?.instructor}</Card.Description>
                        <div className='border-b my-2 text-[#84b179]'></div>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center gap-1'><span className='text-orange-300'><FaStar /></span> {newReleas?.rating}</p>
                            <p className='text-neutral-500 text-[15px]'>{newReleas?.duration}</p>

                            <Link href={`/courses/${newReleas?.id}`}>
                                <Button className={' rounded-md bg-[#84b179] text-white'} variant='outline'>View Details</Button>
                            </Link>
                        </div>
                    </Card.Content>
                </Card.Header>
            </Card>

        </div>
    );
};

export default NewReleasCard;