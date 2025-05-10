import React from 'react'
import Navbar from '../components/Navbar'
import Overview from '../components/ForDashboard/Overview'
import SavingPlan from '../components/ForDashboard/SavingPlan'
import AnalyticChart from '../components/ForDashboard/AnalyticChart'
import RecentTransactions from '../components/ForDashboard/RecentTransactions'
const Dashboard = () => {
  return (
    <>
    <div className='bg-[#F7F7FB] pb-8 w-full lg:px-10 px-4'>
      <div className='lg:flex  gap-5 w-full '>
        <div className='lg:w-[70%]'>
          <Overview />
          <AnalyticChart/>

        </div>
        <div className='lg:w-[30%]  h-full'>
          <SavingPlan/>
          <RecentTransactions/>
        </div>

      </div>
    </div>
    </>
  )
}

export default Dashboard
 