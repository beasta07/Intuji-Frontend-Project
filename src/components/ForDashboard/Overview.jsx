import React, { useState } from 'react'
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs'
import { GiExpense } from 'react-icons/gi'
import { IoBookmarks, IoWallet } from 'react-icons/io5'
import { SiMoneygram } from 'react-icons/si'

const cards = [
  {
    title: 'Your Balance',
    icon: <IoWallet className='text-[#DBDAEC] text-xl' />,
    percentageBg: 'bg-[#3F7CA2]',
    arrowColor: 'text-green-400',
    amount: '$ 28,891.138',
  },
  {
    title: 'Savings',
    icon: <IoBookmarks className='text-green-400 text-xl' />,
    percentageBg: 'bg-[#EEA4B7]',
    arrowColor: 'text-red-700',
    amount: '$ 28,891.138',
  },
  {
    title: 'Expenses',
    icon: <GiExpense className='text-yellow-400 text-2xl' />,
    percentageBg: 'bg-[#FCE3AD]',
    arrowColor: 'text-yellow-700',
    amount: '$ 28,891.138',
  },
  {
    title: 'Incomes',
    icon: <SiMoneygram className='text-blue-400 text-xl' />,
    percentageBg: 'bg-[#A3C9F4]',
    arrowColor: 'text-blue-700',
    amount: '$ 28,891.138',
  }
]

const Overview = () => {
  const [isSelected, setIsSelected] = useState('Your Balance')

  return (
    <div className='bg-white font-jakarta rounded-lg p-4'>
      <h1 className='font-bold'>Overview</h1>
      <div className='grid grid-cols-2 gap-5 mt-4'>
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => setIsSelected(card.title)}
            className={`${isSelected === card.title ? 'bg-[#4644A4] text-white' : 'border border-gray-300 bg-white'} cursor-pointer p-4 rounded-xl transition duration-500`}
          >
            <div className='flex gap-2 items-center'>
              <div className='rounded-full border p-2 border-gray-300'>
                {card.icon}
              </div>
              <div>
                <h1 className='font-semibold'>{card.title}</h1>
                <div className='flex gap-3 mt-1 text-[10px]'>
                  <div className={`${card.percentageBg} rounded-sm px-1`}>
                    <BsArrowUpRight className={`text-[10px] ${card.arrowColor} mt-1`} />
                  </div>
                  <p className='text-gray-400'>15% compared with the last month</p>
                </div>
              </div>
            </div>
            <hr className='text-gray-300 my-4' />
            <div className='flex items-center justify-between'>
              <h2 className='text-2xl font-semibold'>{card.amount}</h2>
              <BsArrowRight className='text-lg' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Overview
