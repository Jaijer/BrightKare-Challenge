'use client';

import React from 'react'
import Image from 'next/image'
import favicon from '@/app/favicon.ico';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useUserStore } from '@/store/userStore';



function PatientInfo() {
    const name = useUserStore((state)=> state.name);
    const age = useUserStore((state)=> state.age);
    const address = useUserStore((state)=> state.address);
    const job = useUserStore((state)=> state.job);
    const phone = useUserStore((state)=> state.phone);
    const email = useUserStore((state)=> state.email);


  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
        <div className='mt-12'>
            <Image src={favicon} alt='profile pic' height={100} width={100} />
        </div>
        <h3 className="text-2xl mb-8">{name}</h3>

        <div className="grid grid-cols-2 gap-6 w-full mb-8">
            <div className='flex flex-col items-center'>
                <span>Male</span>
                <span className="text-gray-500">Gender</span>
            </div>
            <div className='flex flex-col items-center'>
                <span>{age}</span>
                <span className="text-gray-500">Age</span>
            </div>
            <div className='flex flex-col items-center'>
                <span>{address}</span>
                <span className="text-gray-500">Address</span>
            </div>
            <div className='flex flex-col items-center'>
                <span>{job}</span>
                <span className="text-gray-500">Job</span>
            </div>
        </div>


        <div className="flex flex-col gap-4 w-full p-4">
            <span className='font-bold text-xl'>Contact Information</span>
            <div className="flex gap-3 items-center p-2">
                <FaPhoneAlt className='text-gray-500 text-xl' />
                <span>{phone}</span>
            </div>

            <div className="flex gap-3 items-center p-2">
                <MdEmail className='text-gray-500 text-xl' />
                <span>{email}</span>
            </div>
        </div>

        <div className="flex flex-col gap-4 w-full p-4">
            <span className='font-bold text-xl'>Own Dignosis</span>
            <div className="flex gap-3 items-center p-2 flex-wrap">
                <span className="text-red-500 bg-red-50 p-2 rounded-full font-semibold">Influenza</span>
                <span className="text-red-500 bg-red-50 p-2 rounded-full font-semibold">Gastroenteritis</span>
                <span className="text-red-500 bg-red-50 p-2 rounded-full font-semibold">Eczema</span>
            </div>
        </div>

        <div className="flex flex-col gap-4 w-full p-4">
            <span className='font-bold text-xl'>Health Barriers</span>
            <div className="flex gap-3 items-center p-2 flex-wrap">
                <span className="text-blue-500 bg-blue-50 p-2 rounded-full font-semibold">fear of insulin</span>
                <span className="text-blue-500 bg-blue-50 p-2 rounded-full font-semibold">fear of insulin</span>
            </div>
        </div>
    </div>
  )
}

export default PatientInfo