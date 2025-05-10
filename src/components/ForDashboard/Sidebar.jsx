import React, { useState } from 'react';
import {Calendar,Chart,InfoCircle,Login,Message,Setting,User,
} from 'react-iconly';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Sidebar = ({displaySidebar,setDisplaySidebar}) => {
  const [activeState, setActiveState] = useState('Dashboard');
  const menuItems = [
    { label: 'Dashboard', icon: <img src="/images/Sidebar/element-4.png" alt="dashboard" /> },
    { label: 'Schedule', icon: <Calendar set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" /> },
    { label: 'Message', icon: <Message set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" /> },
    { label: 'Analytics', icon: <Chart set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" /> },
    { label: 'Team', icon: <User set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" /> },
    { divider: true },
    { label: 'Profile', icon: <User set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" /> },
    { label: 'Settings', icon: <Setting set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" /> },
  ];
  const toggleSidebar= () => {
    setDisplaySidebar(!displaySidebar )
  }
  return (
    <div className={`${displaySidebar?'block':'hidden md:block'} 'relative h-screen font-jakarta lg:w-auto w-screen bg-white p-8 flex flex-col`}>
     <div className='flex items-center lg:justify-center justify-between'>
      <div className="h-[52px] lg:w-full w-[40%] p-4 lg:p-0 lg:rounded-none rounded-full  flex justify-center items-center bg-[#D9D9D9]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5798 19.01L2.5598 19.03C2.2898 18.44 2.1198 17.77 2.0498 17.03C2.1198 17.76 2.3098 18.42 2.5798 19.01Z" fill="#292D32" />
          <path d="M9.00012 10.38C10.3146 10.38 11.3801 9.31443 11.3801 8C11.3801 6.68556 10.3146 5.62 9.00012 5.62C7.68568 5.62 6.62012 6.68556 6.62012 8C6.62012 9.31443 7.68568 10.38 9.00012 10.38Z" fill="#292D32" />
          <path d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.19C2 17.28 2.19 18.23 2.56 19.03C3.42 20.93 5.26 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V13.9V7.81C22 4.17 19.83 2 16.19 2ZM20.37 12.5C19.59 11.83 18.33 11.83 17.55 12.5L13.39 16.07C12.61 16.74 11.35 16.74 10.57 16.07L10.23 15.79C9.52 15.17 8.39 15.11 7.59 15.65L3.85 18.16C3.63 17.6 3.5 16.95 3.5 16.19V7.81C3.5 4.99 4.99 3.5 7.81 3.5H16.19C19.01 3.5 20.5 4.99 20.5 7.81V12.61L20.37 12.5Z" fill="#292D32" />
        </svg>

      </div>
    <GiHamburgerMenu className='text-2xl lg:hidden' onClick={toggleSidebar} />

     </div>

      <ul className="flex flex-col mt-10 gap-6 text-sm px-4">
        {menuItems.map((item, index) =>
          item.divider ? (
            <hr key={index} className="my-2 text-gray-400" />
          ) : (
            <Link onClick={toggleSidebar} to='/'> 
            <li
              key={index}
              onClick={() => setActiveState(item.label)}
              className="flex items-center gap-3 cursor-pointer "
            >
              {activeState === item.label && (
                <div className="h-6 bg-blue-900 w-0.5 absolute left-1" />
              )}
              {item.icon}
              <span
                className={`transition duration-300 ${
                  activeState === item.label ? 'text-black font-semibold' : 'text-gray-700'
                }`}
              >
                {item.label}
              </span>
            </li>
            </Link>
          )
        )}
      </ul>

      <ul className="absolute bottom-7 flex flex-col gap-6 text-sm px-4">
        <li className="flex gap-3 cursor-pointer">
          <InfoCircle set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" />
          <span className="text-gray-700">Help</span>
        </li>
        <Link to='/login'>
        <li className="flex gap-3 cursor-pointer">
          <Login set="two-tone" primaryColor="gray" secondaryColor="gray" size="medium" />
          <span className="text-gray-700">Logout</span>
        </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
