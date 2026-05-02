"use client"
import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import AllCouresCard from '../AllCoures/AllCouresCard';
import { motion } from 'framer-motion';
import { SearchField } from '@heroui/react';


const SearchInput = ({ allCoures }) => {
    const [search, setSearch] = useState('')

    const fillterArray = allCoures.filter(course => course.title.toLowerCase().includes(search.toLowerCase()))



    return (
        <div>
            <div className='bg-linear-to-r from-[#c7eabb9e] to-[#a2cb8b82] rounded-md flex justify-center items-center px-3 py-3 mt-7 mb-1 w-[380px] md:w-[700px] lg:w-[700px] mx-auto'>


                <SearchField >
                    <SearchField.Group className={'rounded-md h-[50px] bg-white/50 backdrop-blur-lg border border-white/70'}>
                        <SearchField.SearchIcon />
                        <SearchField.Input 
                        onChange={(e) => setSearch(e.target.value)} 
                        value={search} 
                        className="w-[250px]  md:w-[450px] lg:w-[450px]  rounded-md"
                         placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>

            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-5'>

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