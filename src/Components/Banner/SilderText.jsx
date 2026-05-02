import React from 'react';
import ImageSlider from './Swiper';

const SilderText = () => {
    return (
        <div className='text-center my-10  lg:my-7 '>
            <h1 className=' text-xl lg:text-6xl md:text-4xl font-bold'>Build Your <span className='text-[#4d7946] animate-pulse'>Foundation</span> <br />
                Secure Your <span className='text-[#4d7946] animate-pulse'>Career.</span></h1>
            <p className='my-3 text-[0.60rem] lg:text-[0.97rem]  md:text-[0.85rem] text-neutral-600'>Master competitive programming, problem-solving, and core logic on a highly supportive platform !</p>

            <ImageSlider></ImageSlider>
        </div>
    );
};

export default SilderText;