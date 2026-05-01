"use client"
import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import AllCouresCard from '../AllCoures/AllCouresCard';


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
                        fillterArray.map(allCouress => <AllCouresCard allCouress={allCouress} key={allCouress.id}></AllCouresCard>)
                    }
                </div>
        </div >
    );
};

export default SearchInput;