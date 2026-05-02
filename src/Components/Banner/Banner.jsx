"use client"
import Image from 'next/image';
import React from 'react';
import SilderText from './SilderText';
import {  motion } from "framer-motion";

const Banner = () => {


    const foaltAnimation = {
        animate: {
            x: [0, 30, 0],
            y: [0, -20, 0],
        },
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        }
    }



    return (
        <div className='w-full h-[300px]  md:h-[700px] lg:h-[700px] relative mx-auto overflow-hidden'>
            <Image className='object-cover' fill priority alt='banner' src={'https://i.ibb.co.com/zHnSr90k/Jb-JI2-Picsart-Ai-Image-Enhancer.jpg'}></Image>


            <motion.div
                className=' left-0 md:left-3 lg:left-1/10 absolute top-1/6 '
                {...foaltAnimation}
            >
                <Image className='w-10 lg:w-full md:w-20' src={'https://i.ibb.co.com/p6fJyggB/Gemini-Generated-Image-ad95mpad95mpad95-Picsart-Ai-Image-Enhancer-removebg-preview.png'} width={90} height={90} alt=''></Image>
            </motion.div>



            <motion.div className=' left-0 md:left-3 lg:left-1/10 absolute bottom-1/8' {...foaltAnimation} >
                <Image className='w-10 lg:w-full md:w-20' src={'https://i.ibb.co.com/Q3FwHMG0/Chat-GPT-Image-May-1-2026-at-02-22-15-AM-Picsart-Ai-Image-Enhancer-removebg-preview.png'} width={90} height={90} alt=''></Image>
            </motion.div>


            <div className='absolute  left-1/2 top-1/2 -translate-1/2'>
                <SilderText ></SilderText>
            </div>


            <motion.div className='top-1/6 absolute right-7 md:right-8 lg:right-1/10' {...foaltAnimation}>

                <Image className='w-10 lg:w-full md:w-20' src={'https://i.ibb.co.com/Q3Bxqq2Z/Chat-GPT-Image-May-1-2026-at-02-24-02-AM-removebg-preview.png'} width={90} height={90} alt=''></Image>
            </motion.div>


            <motion.div className=' bottom-1/8 right-7 md:right-8 lg:right-1/10 absolute' {...foaltAnimation}>

                <Image className='w-10 lg:w-full md:w-20' src={'https://i.ibb.co.com/tRZ3D5f/Chat-GPT-Image-May-1-2026-at-02-27-09-AM-Picsart-Ai-Image-Enhancer-removebg-preview.png'} width={90} height={90} alt=''></Image>
            </motion.div>
        </div>
    );
};

export default Banner;