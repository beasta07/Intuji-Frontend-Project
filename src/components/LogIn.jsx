import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { PiChartLineUpThin } from "react-icons/pi";
import { FaChartBar } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";


const Login = () => {

  // console.log("login data", data);

  const [user, setUser] = useState({
    username: "",
    password: "",
    isAdmin: true
  });

 


  return (
    <>
      <div className="flex font-jakarta items-center justify-center min-h-[100vh] bg-[#EDF2F9]">
        <div className="flex flex-col md:flex-row w-[90%] md:w-[55%] mx-auto shadow-lg border border-gray-300 rounded-lg relative z-20">
          <div className="flex-1 bg-[#1F7EFE] flex flex-col gap-4 justify-center items-center text-white p-9 text-center relative overflow-hidden rounded-t-md md:rounded-l-lg z-10">
          <div className="flex justify-center text-4xl text-white gap-3 items-center">
          <IoStatsChart   className="text-5xl" />
          <h1 className="font-medium">Expense Tracker</h1>

          </div>
            <p className="px-5 my-4 text-gray-100">
With the power of our Expense Tracker, you can now focus solely on managing your finances and goals — while we handle the tracking, categorization, and insights for you!
            </p>
            <div>
              <img
                src="/images/ForLogin/bg1.png"
                className="absolute -top-80 w-full right-0"
              />
            </div>
     
          </div>

          <div className="flex-1 p-9 pb-0 bg-white relative z-20 rounded-md md:rounded-r-lg">
            <div className="py-4">
              <h2 className="font-medium mb-7 text-2xl">Admin Login</h2>
              <form      className="text-sm">
                <div className="mb-4">
                  <h2 className="pb-1.5">User*</h2>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    
                    required
                    placeholder="Enter user"
                    className="p-2 w-full border border-gray-300 shadow-sm rounded-md focus:outline-none"
                  />
                </div>
                <div>
                  <h2 className="pb-1.5">Password*</h2>
                  <input
                    type="password"
                    name="password"
                    required
                    
                    placeholder="Enter password"
                    className="p-2 w-full border border-gray-300 shadow-sm rounded-md focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="p-2 w-full bg-[#287CEB] text-white rounded-md mt-9 font-semibold"
                >
         Login
                  {/* Log In */}
                </button>
    
              </form>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/Login/bg2.png"
              className="absolute -top-24 -right-32 w-[25%]"
            />
          </div>
          <div className="hidden md:block">
            <img
              src="/images/Login/bg3.png"
              className="absolute -bottom-20 -left-28 w-[20%]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;