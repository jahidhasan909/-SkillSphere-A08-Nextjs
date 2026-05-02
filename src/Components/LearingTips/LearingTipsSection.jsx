"use client"
import { Card } from '@heroui/react';
import React from 'react';
import { IoBookSharp, IoTimerOutline } from 'react-icons/io5';
import { MdGroup } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { motion } from 'framer-motion'

const LearingTipsSection = () => {
    return (
        <div className='w-full container mx-auto my-10'>
            <h1 className='font-bold text-2xl py-3 mb-3'>Learning <span className='text-[#4d7946]'>Tips</span></h1>



            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
            >

                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3'>
                    <Card className="border   border-[#84b17959] shadow-sm shadow-[#84b1795f] rounded-md" variant="">
                        <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                            <span className='bg-[#84b179] py-3 w-[50px] text-white  rounded-md flex items-center justify-center'><IoTimerOutline /></span>
                            <Card.Title className='text-[1rem] font-bold'>Time Management</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <p className='text-[14px] text-center'>Schedule daily learning sessions at consistent times</p>
                        </Card.Content>
                    </Card>

                    <Card className="border border-[#84b17959] shadow-sm shadow-[#84b1795f] rounded-md" variant="">
                        <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                            <span className='bg-[#84b179] py-3 w-[50px] text-white  rounded-md flex items-center justify-center'><IoBookSharp /></span>
                            <Card.Title className='text-[1rem] font-bold'>Active Reading</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <p className='text-[14px] text-center'>Take notes and summarize key concepts in your own words</p>
                        </Card.Content>
                    </Card>



                    <Card className="border border-[#84b17959] shadow-sm shadow-[#84b1795f] rounded-md" variant="">
                        <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                            <span className='bg-[#84b179] py-3 w-[50px] text-white  rounded-md flex items-center justify-center'><MdGroup /></span>
                            <Card.Title className='text-[1rem] font-bold'>Study Groups</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <p className='text-[14px] text-center'>Collaborate with peers to reinforce your understanding</p>
                        </Card.Content>
                    </Card>


                    <Card className="border border-[#84b17959] shadow-sm shadow-[#84b1795f] rounded-md" variant="">
                        <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                            <span className='bg-[#84b179] py-3 w-[50px] text-white  rounded-md flex items-center justify-center'><GiProgression /></span>
                            <Card.Title className='text-[1rem] font-bold'>Track Progress</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <p className='text-[14px] text-center'>Review your milestones weekly to stay motivated</p>
                        </Card.Content>
                    </Card>
                </div>
            </motion.div>

        </div>
    );
};

export default LearingTipsSection;