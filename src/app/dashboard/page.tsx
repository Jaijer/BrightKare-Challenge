import React from 'react'
import Dashboard from '@/components/Dashboard'
import SideBar from '@/components/SideBar'

function dashboard() {
  return (
    <div className='flex'>
        <SideBar />
        <Dashboard />
    </div>
  )
}

export default dashboard