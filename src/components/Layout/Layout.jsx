import React from 'react'
import Sidebar from '../ForDashboard/Sidebar'
import Dashboard from '../../pages/Dashboard'

const Layout = () => {
  return (
    <div className='flex w-full'>
      <div className='w-[20%]'>
        <Sidebar/>

      </div>
          <Dashboard/> 
    </div>
  )
}

export default Layout
