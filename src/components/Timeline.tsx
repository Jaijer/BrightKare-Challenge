import React from 'react'
import { FcTimeline } from "react-icons/fc";

function Timeline() {
    const timelineData = [
        { date: '10Wed 2024', label: 'Pre diabetic', value: 10.4 },
        { date: '10Wed 2024', label: 'Pre diabetic', value: 10.4 },
        { date: '10Wed 2024', label: 'Pre diabetic', value: 10.4 },
        { date: '10Wed 2024', label: 'Pre diabetic', value: 10.4 },
        { date: '10Wed 2024', label: 'Pre diabetic', value: 10.4 },
        { date: '10Wed 2024', label: 'Pre diabetic', value: 10.4 },
        { date: '10Wed 2024', label: 'Pre diabetic', value: 10.4 },
      ];
    
      return (
        
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full gap-2 items-center mb-10">
                <FcTimeline className='text-3xl' />
                <h2 className="text-2xl font-bold">Timeline</h2>
            </div>
          <div className="border-l-2 border-gray-300 pl-4">
            {timelineData.map((item, index) => (
              <div key={index} className={index % 2? "py-6 pl-1":"bg-blue-50 py-6 pl-1"}>
                <div className="flex items-center">
                  <div className="bg-bluish rounded-full h-4 w-4 flex items-center justify-center relative">
                    <span className="bg-white rounded-full h-2 w-2 absolute"></span>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold">{item.date}</p>
                    <p className="text-sm">{item.label} <br /> A1c: {item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };

export default Timeline