import React, { useState } from 'react'
import Sidebar from '../ForDashboard/Sidebar'
import Dashboard from '../../pages/Dashboard'
import Navbar from '../Navbar'

const Layout = () => {
    const [displaySidebar,setDisplaySidebar]= useState(true)
 
  return (
    <div className='flex w-full relative'>
      <div className='lg:w-[20%] w-[0%]   fixed h-screen shadow  bg-white z-10'>
        <Sidebar displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar} />

      </div>
      <div className='lg:w-[80%] w-full  lg:ml-[20%]'>
        
        <Navbar className='fixed'
         displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar} />
          <Dashboard/> 
      </div>
    </div>
  )
}

export default Layout
