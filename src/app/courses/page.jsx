import AllCouresCard from '@/Components/AllCoures/AllCouresCard';
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



                <div className='relative'>
                    <span className='top-[37px] left-4  text-neutral-400   z-50 absolute'><IoSearchOutline /></span>
                    <input className='bg-white  relative w-[300px] py-3 px-3 rounded-md border-[#84b179] border mt-5' type="search" placeholder="        Search" />
                </div>



                <div className='grid grid-cols-4 gap-3 py-5'>
                    {
                        allCoures.map(allCouress => <AllCouresCard allCouress={allCouress} key={allCouress.id}></AllCouresCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;