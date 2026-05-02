import Image from 'next/image';
import React from 'react';
import { IoCallSharp, IoLocation } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#1e2e1b] '>
            <div className=' container mx-auto px-5'>
                <footer className="footer sm:footer-horizontal bg-base-200 text-base-content  grid   grid-cols-12 py-20">
                    <aside className='col-span-3 mb-2'>
                        <div className="">
                            <div className="flex items-center gap-3">
                                <div className='bg-[#84b179] p-1 rounded-md flex items-center justify-center'>
                                    <Image height={60} width={60} alt='logo' src={'https://i.ibb.co.com/v9HNCVg/TEw-Df-removebg-preview.png'}></Image>
                                </div>
                                <h2 className="font-bold text-4xl"><span className='text-white'>Skill</span><span className='text-[#84b179]'>Sphere</span></h2>
                            </div>

                            <div className='mt-7'>
                                <span className='flex text-white items-center gap-2'><IoLocation />
                                    Level-4, 34, Awal Centre, Banani, Dhaka</span>
                                <span className='flex text-white items-center gap-2'><AiTwotoneMail />
                                    web@skillsphere.com</span>
                                <div className='bg-white/80 backdrop-blur-lg border border-white-70 w-[330px] mt-7 flex items-center gap-2 p-3 rounded-md'>
                                    <IoCallSharp />
                                    <div>
                                        <p className='text-neutral-600'>Communication</p>
                                        <h3 className='font-semibold text-[1.10rem]'>01400-90005 , 01800-000870</h3>
                                        <p className='text-neutral-600'>(Sat - Thu, 10:00 AM to 7:00 PM)</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </aside>
                    <div className='flex text-white  gap-7 col-span-9 justify-around mt-2'>
                        <nav className='flex flex-col gap-4'>
                            <h6 className="font-bold">Company</h6>
                            <a className="text-neutral-300">About Us</a>
                            <a className="text-neutral-300">Blog</a>
                            <a className="text-neutral-300">Privacy Policy</a>
                            <a href="" className='text-neutral-300'>Newsletter</a>
                        </nav>
                        <nav className='flex flex-col gap-4'>
                            <h6 className="font-bold">Support</h6>
                            <a className="text-neutral-300">Help Center</a>
                            <a className="text-neutral-300">Terms and condition</a>
                            <a className="text-neutral-300">Press</a>
                            <a className="text-neutral-300">Contact Us</a>
                        </nav>
                        <nav className='flex flex-col  gap-4'>
                            <h6 className="font-bold">Follow Us</h6>
                            <a className="flex items-center gap-1 border p-2 rounded-md"><FaFacebook /> Facebook </a>
                            <a className="flex items-center gap-1 border p-2 rounded-md"><FaLinkedin /> Linkein</a>
                            <a className="flex items-center gap-1 border p-2 rounded-md"><FaSquareXTwitter /> Twitter</a>
                        </nav>
                    </div>

                </footer>
                <div className='border'></div>
                <p className='text-right text-neutral-300 p-2 '>© 2026 Skillsphere. All rights reserved.</p>
            </div>
        </div >
    );
};

export default Footer;