import { Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { GoCodeReview } from "react-icons/go";
import Marquee from "react-fast-marquee";

const StudentReview = () => {
    return (
        <div className='container mx-auto py-18  my-20 '>
            <h2 className='text-center text-3xl font-bold pb-8'>Successful students <span className='text-[#4d7946]'>review</span></h2>
            <Marquee pauseOnHover={true} speed={100}>

                <div className='flex'>
                    <div className='w-[300px] bg-white shadow-md rounded-md p-2 space-y-2 mr-3'>

                        <div className='flex justify-between'>
                            <GoCodeReview />
                            <div className='flex text-orange-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='line-clamp-3'>It was really awesome journey. It completed my skills and projects with nice details and it helped me out to find the gaps of my previous skills and projects. From Early job placement, SCIC & mock interviews, I got a clear idea about interview, resume and got confidence about how to perform well in interview(both interpersonal and Technical sides). Thanks to Skillsphere team members and their hard works.</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/Nd5pX0y6/Screenshot-2026-05-01-at-12-48-16-AM.png'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Emma Clary</h3>
                                <p className='text-neutral-500'>Nextjs Dev</p>
                            </div>
                            <Chip className='w-[70px] h-[40px] bg-[#e2eed3]'>Batch 11</Chip>
                        </div>
                    </div>



                    <div className='w-[300px] bg-white shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                            <div className='flex text-orange-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='line-clamp-3'>Skillsphere has been a true turning point in my career. In the beginning, I was only interested in web development, but I didn’t have a clear direction or roadmap. After enrolling in the Programming Hero course, I learned step by step — HTML, CSS, JavaScript, React, Node.js, MongoDB — all through a project-based learning approach.The biggest impact came from their real-life projects and proper guidance, </p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/0VBrfTP3/pexels-yusuf-alp-2891146-31420959.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div >
                                <h3 className='text-[1rem] font-bold'>Jhon doe</h3>
                                <p className='text-neutral-500'>Full-Stack Dev</p>
                            </div>
                            <Chip className='w-[70px] h-[40px] bg-[#e2eed3]'>Batch 07</Chip>
                        </div>
                    </div>



                    <div className='w-[300px] bg-white shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between' >
                            <GoCodeReview />
                            <div className='flex text-orange-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='line-clamp-3'>Skillsphere has had a huge impact on my career journey. It gave me a strong foundation in web development and helped me understand real-world project structures through hands-on practice.</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/SwQdzyXm/pexels-ahmed-abdelhalem-3427792-35389092.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Illia Aderson</h3>
                                <p className='text-neutral-500'>MERN Stack Dev</p>
                            </div>
                            <Chip className='w-[70px] h-[40px] bg-[#e2eed3]'>Batch 11</Chip>
                        </div>
                    </div>



                    <div className='w-[300px] bg-white shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                            <div className='flex text-orange-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='line-clamp-3'>For me, Skillsphere kept me engaged throughout my university life. From my first year to my final year, I stayed connected with the PH community. I first completed the Phitron Batch 2 course as a problem solver</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/jknd0NcD/pexels-pessoas-uem-503045317-16160859.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>James bond</h3>
                                <p className='text-neutral-500'>Data analytics</p>
                            </div>
                            <Chip className='w-[70px] h-[40px] bg-[#e2eed3]' >Batch 09</Chip>
                        </div>
                    </div>


                    <div className='w-[300px] bg-white shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                            <div className='flex text-orange-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='line-clamp-3'>It was really awesome journey. It completed my skills and projects with nice details and it helped me out to find the gaps of my previous skills and projects. From Early job placement, SCIC & mock interviews, I got a clear idea about interview.</p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/mQ5DYn1/pexels-pessoas-uem-503045317-16173670.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Mical james</h3>
                                <p className='text-neutral-500'>Ui/Ux</p>
                            </div>
                            <Chip className='w-[70px] h-[40px] bg-[#e2eed3]'>Batch 10</Chip>
                        </div>
                    </div>


                    <div className='w-[300px] bg-white shadow-md rounded-md p-2 space-y-2 mr-3'>
                        <div className='flex justify-between'>
                            <GoCodeReview />
                            <div className='flex text-orange-300'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <p className='line-clamp-3'>Its was really amazing. I didnot know anything about programming before enrolling in skillsphere Hero. The way Skillsphere taught and organized the whole bootcamp, its mind blowing. </p>
                        <div className='flex items-center gap-2'>
                            <Image src={'https://i.ibb.co.com/sdPbqk9k/pexels-gilles-33136738.jpg'} width={'60'} height={'60'} className=' rounded-full' alt=''></Image>
                            <div>
                                <h3 className='text-[1rem] font-bold'>Vladimir</h3>
                                <p className='text-neutral-500'>Flutter Dev</p>
                            </div>
                            <Chip className='w-[70px] h-[40px] bg-[#e2eed3]'>Batch 1</Chip>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default StudentReview;