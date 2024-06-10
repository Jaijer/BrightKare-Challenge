import React from 'react'
import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import PatientInfo from './PatientInfo';
import Timeline from './Timeline';
import TimelineCalendar from './TimelineCalendar';
import MedicalHistory from './MedicalHistory';
import Medication from './Medication';
import PopoverComponent from './PopoverComponent';

  

function Dashboard() {
  return (
    <div className='w-5/6 min-h-screen'>
        <div className="pt-12 px-6">
            <h1 className='text-3xl text-bluish'>Hello, Brave Champion</h1>
            <span className="text-gray-500">check what is new</span>

            <div className="flex gap-4 mt-4 items-center justify-center md:justify-start">
                <button className="bg-bluish rounded-2xl px-8 py-2 text-white">My Profile</button>
                <button className='text-gray-500'>My Plans</button>
            </div>


            <div className="flex flex-col md:grid grid-cols-6 gap-4 pt-10">

                {/* Mesurements */}
                
    
                <PopoverComponent name="BMI" />
                <PopoverComponent name="Weight" />
                <PopoverComponent name="Height" />
                <PopoverComponent name="Blood_P" />


                <div className="col-span-2 row-span-5 Card">
                    <PatientInfo />
                </div>

                <div className="col-span-2 row-span-4 Card">
                    <Timeline />
                </div>

                <div className="col-span-2 row-span-2 Card">
                    <TimelineCalendar />
                </div>

                <div className="col-span-2 row-span-2 Card">
                    <MedicalHistory />
                </div>

                <div className="col-span-6 Card mb-12">
                    <Medication />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard