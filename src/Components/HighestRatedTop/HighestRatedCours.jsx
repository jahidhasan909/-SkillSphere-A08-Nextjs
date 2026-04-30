import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const HighestRatedCours = ({ topCouress }) => {
    return (
        <div className=''>
            <Card className="rounded-md bg-[#ffffff] shadow-md" variant="">
                <Card.Header className='space-y-1'>
                    <div className='relative aspect-square'>
                        <Image src={topCouress.image} fill sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='object-fit  rounded-md' alt='coures img'></Image>
                    </div>
                    <Card.Description>{topCouress.category}</Card.Description>
                    <Card.Title className='font-bold text-[17px]'>{topCouress.title}</Card.Title>
                    <Card.Content>
                        <Card.Description>Instructor : {topCouress.instructor}</Card.Description>
                        <div className='border-b my-2 text-[#84b179]'></div>
                        <div className='flex items-center justify-between'>
                            <p className='flex items-center gap-1'><span className='text-orange-300'><FaStar /></span> {topCouress.rating}</p>
                            <p className='text-neutral-500 text-[15px]'>{topCouress.duration}</p>
                            <Button className={' rounded-md bg-[#84b179] text-white'} variant='outline'>View Details</Button>
                        </div>
                    </Card.Content>
                </Card.Header>
            </Card>
        </div>
    );
};

export default HighestRatedCours;