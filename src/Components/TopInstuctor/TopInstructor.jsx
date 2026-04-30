import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const TopInstructor = () => {
    return (
        <div className=' container mx-auto my-20'>
            <h1 className='text-2xl font-bold py-7'>Top Instructors</h1>
            <div className='grid grid-cols-4 gap-3'>
                <Card className="border  bg-[#d9ebd496] shadow rounded-md" variant="">
                    <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                        <Image src={'https://i.ibb.co.com/gMCLGSzV/1691458003200.jpg'} className=' rounded-full' width={80} height={80} alt=''></Image>
                        <Card.Title className='text-[1.05rem] font-bold'>John Doe</Card.Title>
                    </Card.Header>
                    <Card.Content className='text-neutral-500'>
                        <p className='text-[14px] text-center'>Full-stack Dev</p>
                        <p className='text-center'>12 Courses</p>
                    </Card.Content>
                </Card>




                <Card className="border bg-[#d9ebd496] shadow rounded-md" variant="">
                    <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                        <Image src={'https://i.ibb.co.com/LXrmKTTR/1761623489567.jpg'} className=' rounded-full' width={80} height={80} alt=''></Image>
                        <Card.Title className='text-[1.05rem] font-bold'>Michael Lee</Card.Title>
                    </Card.Header>
                    <Card.Content className='text-neutral-500'>
                        <p className='text-[14px] text-center'>Next.js Dev</p>
                        <p className='text-center'>9 Courses</p>
                    </Card.Content>
                </Card>



                <Card className="border bg-[#d9ebd496] shadow rounded-md" variant="">
                    <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                        <Image src={'https://i.ibb.co.com/RTnZK7Kt/huge-81df210f91963fc5bb449870cf1efdaf.jpg'} className=' rounded-full' width={80} height={80} alt=''></Image>
                        <Card.Title className='text-[1.05rem] font-bold'>James Anderson</Card.Title>
                    </Card.Header>
                    <Card.Content className='text-neutral-500'>
                        <p className='text-[14px] text-center'>Flutter and Dart Dev</p>
                        <p className='text-center'>10 Courses</p>
                    </Card.Content>
                </Card>


                <Card className="border bg-[#d9ebd496] shadow  rounded-md" variant="">
                    <Card.Header className='mx-auto space-y-2 text-center flex flex-col justify-center items-center'>
                        <Image src={'https://i.ibb.co.com/QvRkvcbf/1754665145306.jpg'} className=' rounded-full' width={80} height={80} alt=''></Image>
                        <Card.Title className='text-[1.05rem] font-bold'>Emily Clark</Card.Title>
                    </Card.Header>
                    <Card.Content className='text-neutral-500'>
                        <p className='text-[14px] text-center'>UI/UX Designer</p>
                        <p className='text-center'>2 Courses</p>
                    </Card.Content>
                </Card>
            </div>
        </div>
    );
};

export default TopInstructor;