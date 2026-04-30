import React from 'react';
import ImageSlider from './Swiper';

const SilderText = () => {
    return (
        <div className='text-center mt-7'>
            <h1 className='text-4xl font-bold'><span className='text-[#4d7946] '>Start</span> from zero and become a professional. <br />
                Secure your <span className='text-[#4d7946] '>job/internship.</span></h1>
            <p className='my-3 text-[15px] text-neutral-500'>6-Month Super Guided Bootcamp with 30+ Projects, Live Capstone & 24/7 Support 🚀
                Industry-standard curriculum, weekly challenges, mock interviews, CV/portfolio building, and premium job placement support—trusted by 5,400+ successful students.</p>

            <ImageSlider></ImageSlider>
        </div>
    );
};

export default SilderText;