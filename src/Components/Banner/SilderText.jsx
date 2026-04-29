import React from 'react';
import ImageSlider from './Swiper';

const SilderText = () => {
    return (
        <div className='text-center mt-7'>
            <h1 className='text-4xl font-bold'><span className='text-[#4d7946] '>Start</span> from zero and become a professional. <br />
                Secure your <span className='text-[#4d7946] '>job/internship.</span></h1>
            <p className='my-3 text-[15px] text-neutral-500'>6-month Super Guided Bootcamp—30+ Projects, Live Capstone, 24/7 Crazy Support, Premium Job Placements & Proven Track Record of  5400+ Successful Students 🚀 Comes with Industry-Standard  Curriculum, Weekly Challenges, Free Bonus Modules, Mock Interviews, CV/Portfolio Building & Lifetime Community Support.</p>

            <ImageSlider></ImageSlider>
        </div>
    );
};

export default SilderText;