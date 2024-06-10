import React from 'react'
import { FaHistory } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";


function MedicalHistory() {
    const historyData = [
        {name: "chronic disease", diseases: ["Diabetes", "Asthma", "Hypertension"]},
        {name: "chronic disease", diseases: ["Diabetes", "Asthma", "Hypertension"]},
        {name: "chronic disease", diseases: ["Diabetes", "Asthma", "Hypertension"]}
    ]
  return (
    <div className="flex flex-col items-center w-full h-full">
        <div className="flex w-full gap-2 items-center mb-10">
            <FaHistory className='text-3xl text-bluish' />
            <h2 className="text-2xl font-bold">Medical History</h2>
        </div>

        <div className="flex flex-col gap-3 w-full">
            {historyData.map((item, index) => (
              <div key={index} className={index % 2? "py-6 pl-1":"bg-blue-50 py-6 pl-1"}>
                <div className="flex items-center">
                  <FaBookMedical />
                  <div className="ml-4">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm">{}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>

  )
}

export default MedicalHistory