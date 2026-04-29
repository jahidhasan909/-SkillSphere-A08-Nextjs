import { Button } from '@heroui/react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center flex items-center flex-col  justify-center min-h-[500px] space-y-3 '>
            <h1 className='text-8xl text-[#c7eabb] font-bold'>404</h1>
            <h2 className='font-bold text-xl'>Page Not Found</h2>
            <p className='text-[#8aaa85]'>Oops! The page youre looking for doesnot exist.</p>
            <Button className={' rounded-md bg-[#84b179] text-white font-bold'} variant='outline'><Link href="/">Return Home</Link></Button>
        </div>
    )
}