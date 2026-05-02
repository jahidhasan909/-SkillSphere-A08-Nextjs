'use client'
import React from 'react';
import { motion } from 'framer-motion'
import NewReleasCard from './NewReleasCard';

const NewReleseAni = ({ newRelease }) => {
    return (
        <div className='lg:w-full lg:container lg:mx-auto flex justify-center  lg:flex lg:justify-center  mb-20 mt-10'>
            <div className='bg-linear-to-r from-[#c7eabb55] to-[#a2cb8b30]  lg:py-20 lg:px-20 rounded-md w-[300px] md:w-[700px] lg:w-[1000px] py-5 px-3'>
                <h1 className='text-center text-3xl font-bold'>New <span className='text-[#4d7946]'>Releases</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4 py-7  md:px-10 lg:px-10">
                    {
                        newRelease.map((newReleas, index) => <motion.div
                            key={newReleas.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, scale: 1.03 }}
                        >
                            <NewReleasCard newReleas={newReleas}></NewReleasCard>
                        </motion.div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewReleseAni;