import Image from 'next/image';
import React from 'react';
import SilderText from './SilderText';

const Banner = () => {
    return (
        <div className='w-full h-[700px] relative mx-auto'>
            <Image className='flex mx-auto  w-full relative' width={1200} height={400} alt='banner' src={'https://i.ibb.co.com/zHnSr90k/Jb-JI2-Picsart-Ai-Image-Enhancer.jpg'}></Image>
            <div className='absolute  left-1/2 top-1/2 -translate-1/2'>
                <SilderText ></SilderText>
            </div>
        </div>
    );
};

export default Banner;