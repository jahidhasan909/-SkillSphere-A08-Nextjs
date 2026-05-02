"use client"
import { EnrollAdded, WishListAdded } from '@/Context/Courescontext';
import { Avatar, Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { HashLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const DetailsCard = ({ expectedCouresDetails }) => {

    const { enroll, setEnroll } = useContext(EnrollAdded)
    const { Wishlist, setWistlish } = useContext(WishListAdded)



    const handleEnroll = () => {
        toast.success(`${expectedCouresDetails.title} successfully Enroll`)
        setEnroll([...enroll, { ...expectedCouresDetails, id: Date.now() }])
    }
    const handleWishlist = () => {
        toast.success(`${expectedCouresDetails.title} successfully Wishlist`)
        setWistlish([...Wishlist, { ...expectedCouresDetails, id: Date.now() }])
    }

    if (!expectedCouresDetails) {
        return <div className='flex items-center justify-center min-h-screen'>
            <HashLoader color="#456e3e" />
        </div>
    }



    return (
        <div className=' container mx-auto my-10'>
            <Card className="rounded-md bg-[#f5fbf0]  shadow border" variant="tertiary">
                <Card.Header className='flex gap-2 lg:grid lg:grid-cols-12'>
                    <div className='col-span-9  border-r-2 border-r-[#b2d5ab65] space-y-3 mt-3 pl-4'>
                        <div className='flex gap-2'>
                            <Chip color="" className='bg-[#e8f5d0] rounded-md font-semibold text-[0.90rem]'>{expectedCouresDetails.level}</Chip>
                            <Chip color="" className='bg-[#e8f5d0] rounded-md font-semibold text-[0.90rem]'>{expectedCouresDetails.category}</Chip>
                        </div>
                        <Card.Title className='font-bold text-2xl'>{expectedCouresDetails?.title}</Card.Title>
                        <Card.Description className='text-[0.90rem]'>{expectedCouresDetails?.description}</Card.Description>
                        <Card.Content>
                            <ul className='flex list-disc gap-7 px-3 text-neutral-500'>
                                <li>Instructor : {expectedCouresDetails?.instructor}</li>
                                <li>Video : {expectedCouresDetails?.duration}</li>
                                <li className='flex items-center gap-1'> <span className='text-orange-300'><FaStar /></span>{expectedCouresDetails?.rating}</li>
                            </ul>
                        </Card.Content>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-[1.10rem]'>Course Curriculum : </h1>
                            <ul className='space-y-3 pr-6'>
                                {
                                    expectedCouresDetails?.technologies?.map((tech, index) => <li className='bg-white border rounded-md px-3 py-3 flex items-center gap-3' key={index}><Avatar className='bg-[#b2cc9dcf] text-white font-semibold'>{index + 1}</Avatar> {tech}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='col-span-3 mx-auto bg-white px-4 py-4 rounded-md shadow space-y-2'>
                        <Image src={expectedCouresDetails?.image} width={300} className=' rounded-md' height={300} alt=''></Image>
                        <span className='text-xl font-semibold'>${expectedCouresDetails?.price}</span>
                        <p className='text-[13px] text-neutral-500'>One-time payment, lifetime access</p>
                        <div className='flex flex-col gap-2'>
                            <Button onClick={handleEnroll} className={'rounded-md bg-[#84b179] w-full text-white font-semibold'} variant='outline'>Enroll Now</Button>
                            <Button onClick={handleWishlist} className={'rounded-md w-full bg-[#f5fbf0]'} variant='outline'>Add to Wishlist</Button>
                        </div>

                        <div>
                            <h3 className='text-[1.10rem] font-bold'>This course includes:</h3>
                            <ul className='list-disc px-5 text-neutral-500'>
                                <li>{expectedCouresDetails?.duration} of video</li>
                                <li>Downloadable resources</li>
                                <li>Certificate of completion</li>
                                <li>Lifetime access</li>
                                <li>Mobile & desktop access</li>
                            </ul>
                        </div>

                    </div>
                </Card.Header>
            </Card>
        </div>
    );
};

export default DetailsCard;