"use client"
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <div>
            <Link href={href} className={`${isActive ? 'bg-[#84b179] px-3 py-2 text-white font-bold rounded-md' : ''}`}>{children}</Link>
        </div>
    );
};

export default Navlink;