import React from 'react'
import { GiMedicines } from "react-icons/gi";


function Medication() {
    const medications = [
        {
          name: 'Medication name',
          status: 'Active',
          dosage: '25 mg',
          frequency: 'once daily',
          prescribingPhysician: 'Dr. Johnson',
          startDate: '03/10/2023',
          endDate: '-',
        },
        {
          name: 'Medication name',
          status: 'Discontinued',
          dosage: '25 mg',
          frequency: 'once daily',
          prescribingPhysician: 'Dr. Johnson',
          startDate: '03/10/2023',
          endDate: '07/12/2023',
        },
        {
          name: 'Medication name',
          status: 'On Hold',
          dosage: '25 mg',
          frequency: 'once daily',
          prescribingPhysician: 'Dr. Johnson',
          startDate: '-',
          endDate: '-',
        },
        {
          name: 'Medication name',
          status: 'Active',
          dosage: '25 mg',
          frequency: 'once daily',
          prescribingPhysician: 'Dr. Johnson',
          startDate: '03/10/2023',
          endDate: '-',
        },
      ];
    
      const getStatusColor = (status: string) => {
        switch (status) {
          case 'Active':
            return 'bg-green-500 text-white';
          case 'Discontinued':
            return 'bg-red-500 text-white';
          case 'On Hold':
            return 'bg-gray-500 text-white';
          default:
            return 'bg-gray-300 text-gray-800';
        }
      };
    
      return (
        <div className="overflow-x-auto">
          <div className="flex w-full gap-2 items-center mb-10">
            <GiMedicines className='text-3xl text-bluish' />
            <h2 className="text-2xl font-bold">Medication</h2>
        </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Medication name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dosage
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prescribing Physician
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {medications.map((medication, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{medication.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        medication.status
                      )}`}
                    >
                      {medication.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{medication.dosage}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{medication.frequency}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{medication.prescribingPhysician}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{medication.startDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{medication.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

export default Medication