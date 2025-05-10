import React from 'react'
import Navbar from '../components/Navbar'
import Overview from '../components/ForDashboard/Overview'
import SavingPlan from '../components/ForDashboard/SavingPlan'
const Dashboard = () => {
  return (
    <>
    <div className='bg-[#F7F7FB] w-full p-10'>
      <Navbar/>
      <div className='flex gap-5 w-full py-8'>
        <div className='w-[70%]'>
          <Overview />

        </div>
        <div className='w-[30%]'>
          <SavingPlan/>
        </div>

      </div>
    </div>
    </>
  )
}

export default Dashboard
 