import AllCouresCard from '@/Components/AllCoures/AllCouresCard';
import SearchInput from '@/Components/Stated/SearchInput';

import { SearchField } from '@heroui/react';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';



const getAllCoures = async () => {
    const res = await fetch('https://skill-sphere-a08-nextjs.vercel.app/data.json')
    const coures = res.json()
    return coures;
}


const CoursesPage = async () => {
    const allCoures = await getAllCoures();
    return (
        <div className='bg-[#f5fbf0]'>
            <div className=' container mx-auto py-15'>
                <h1 className='text-2xl font-bold'>All Courses</h1>



                <SearchInput allCoures={allCoures}></SearchInput>



               
            </div>
        </div>
    );
};

export default CoursesPage;