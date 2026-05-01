"use client"
import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import AllCouresCard from '../AllCoures/AllCouresCard';
import { motion } from 'framer-motion';


const SearchInput = ({ allCoures }) => {
    const [search, setSearch] = useState('')

    const fillterArray = allCoures.filter(course => course.title.toLowerCase().includes(search.toLowerCase()))



    return (
        <div>
            <div className='relative'>
                <span className='top-[37px] left-4  text-neutral-400   z-50 absolute'><IoSearchOutline /></span>
                <input onChange={(e) => setSearch(e.target.value)} value={search} className='bg-white  relative w-[300px] py-3 pl-9 px-3 rounded-md border-[#84b179] border mt-5' type="search" placeholder="Search" />
            </div>



            <div className='grid grid-cols-4 gap-3 py-5'>

                {
                    fillterArray.map((allCouress, index) => <motion.div
                        key={allCouress.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5, scale: 1.03 }}
                    >
                        <AllCouresCard allCouress={allCouress} ></AllCouresCard>
                    </motion.div>)
                }
            </div>
        </div >
    );
};

export default SearchInput;