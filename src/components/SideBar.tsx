'use client';

import React, { useState } from 'react'
import Image from 'next/image';
import favicon from '@/app/favicon.ico';
import { IoPerson } from "react-icons/io5";
import { useUserStore } from '@/store/userStore';

// The menu on the left side that becomes hamburger menu in phones
function SideBar() {
    // This state is for the hamburger menu
    const [isOpen, setIsOpen] = useState(false);
    const name = useUserStore((state)=> state.name);


  return (
    <div>
        <div className='w-full bg-bluish min-h-screen h-full hidden md:flex flex-col items-center gap-20 pt-8'>
            <div className="flex justify-center p-2">
                <div>
                    <div className="flex items-center gap-3">
                        <div>
                            <Image height={50} width={50} src={favicon} alt='profile-pic' />
                        </div>
                        <h3 className='text-white pr-3'>{name}</h3>
                    </div>
                </div>
            </div>
            
            <div className="p-4 w-full text-white bg-white bg-opacity-10 border-l-4
            border-white hover:bg-opacity-15 transition-all cursor-pointer">
                <div className="flex gap-2 items-center">
                    <IoPerson className='text-xl' />
                    <h2>Profile</h2>
                </div>
            </div>
        </div>




        <div className="flex md:hidden z-50">
        {/* Sidebar */}
            <div   
                // Conditional class based on isOpen 
                // state to control width and visibility
                className={`bg-bluish text-white 
                            fixed h-screen transition-all 
                            duration-300 z-10 
                            ${isOpen ? 'w-48' : 'w-0 overflow-hidden'
                }`}>
                {/* Sidebar content */}
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3">
                        <div className='p-4'>
                            <Image height={50} width={50} src={favicon} alt='profile-pic' />
                        </div>
                        <h3 className='text-white pr-3'>{name}</h3>
                    </div>

                    <div className="p-4 w-full text-white bg-white bg-opacity-10 border-l-4
                        border-white hover:bg-opacity-15 transition-all cursor-pointer">
                        <div className="flex gap-2 items-center">
                            <IoPerson className='text-xl' />
                            <h2>Profile</h2>
                        </div>
                    </div>
                {/* Add more sidebar items here */}
                </div>
            </div>
            {/* Main content */}
            <div className={`flex-1 px-2 py-4 
                                ${isOpen ? 'ml-48' : 'ml-0'}`}>
                {/* Button to toggle sidebar */}
                <div className="ml-auto">
                <button
                    className="bg-bluish
                            text-white font-bold py-2 px-2 rounded"
                    onClick={() => setIsOpen(!isOpen)}>
                    {/* Toggle icon based on isOpen state */}
                    {isOpen ? (
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                    )}
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar