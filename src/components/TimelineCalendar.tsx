import React from 'react'
import { FcTimeline } from 'react-icons/fc';

function TimelineCalendar() {
    const daysInMonth = new Date(2024, 10, 0).getDate(); // Get the number of days in January 2024
    const firstDayOfMonth = new Date(2024, 0, 1).getDay(); // Get the first day of the week (0 for Sunday, 1 for Monday, etc.)
  
    const days = [];
    let day = 1;
  
    // Add empty cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-gray-400"></div>);
    }
  
    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const isCurrentDay = i === 10; // Replace with your condition for the current day
      const dayClass = isCurrentDay ? 'bg-blue-500 text-white rounded-full' : '';
      days.push(
        <div key={i} className={`w-8 h-8 flex items-center justify-center ${dayClass}`}>
          {i}
        </div>
      );
    }
  
    // Add empty cells for the remaining days of the week
    const remainingDays = 42 - (firstDayOfMonth + daysInMonth);
    for (let i = 0; i < remainingDays; i++) {
      days.push(<div key={`empty-end-${i}`} className="text-gray-400"></div>);
    }
  
    return (
      <div className="flex flex-col items-center w-full h-full">
        <div className="flex w-full gap-2 items-center mb-10">
                <FcTimeline className='text-3xl' />
                <h2 className="text-2xl font-bold">Timeline</h2>
        </div>
        <div className="flex items-center mb-4">
          <button className="bg-gray-300 rounded-l px-2 py-1">&lt;</button>
          <div className="px-4 py-1">January 2024</div>
          <button className="bg-gray-300 rounded-r px-2 py-1">&gt;</button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          <div className="text-gray-500">Mon</div>
          <div className="text-gray-500">Tue</div>
          <div className="text-gray-500">Wed</div>
          <div className="text-gray-500">Thu</div>
          <div className="text-gray-500">Fri</div>
          <div className="text-gray-500">Sat</div>
          <div className="text-gray-500">Sun</div>
          {days}
        </div>
      </div>
    );
}

export default TimelineCalendar