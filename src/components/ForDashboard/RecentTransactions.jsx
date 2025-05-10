import React from 'react';

const transactions = [
  {
    name: 'Figma',
    date: 'August 2022',
    amount: '$100',
    status: 'Completed',
    statusColor: 'text-green-600',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'YouTube',
    date: 'July 2022',
    amount: '$40',
    status: 'Completed',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
  },
  {
    name: 'Spotify',
    date: 'June 2022',
    amount: '$15',
    status: 'Completed',
    logo: 'https://cdn-icons-png.flaticon.com/512/174/174872.png',
  },
  {
    name: 'Freepik',
    date: 'May 2022',
    amount: '$25',
    status: 'Completed',
    logo: 'https://cdn-icons-png.flaticon.com/512/3669/3669967.png',
  },
];

const RecentTransactions = () => {
  return (
    <div className='bg-white mt-5 h-full w-full font-jakarta rounded-lg p-4'>
      <div className='flex justify-between'>
        <h1 className='font-bold'>Recent Transactions</h1>
        <button className='text-[#4644a4] cursor-pointer  '>See All</button>
      </div>
      <hr className='text-gray-300 my-4' />

      <ul className='space-y-4'>
        {transactions.map((tx, index) => (
          <li key={index} className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <div className='bg-gray-200 p-2 rounded-full'>
                <img src={tx.logo} alt={tx.name} className='w-6 h-6' />
              </div>
              <div>
                <h1 className='font-semibold'>{tx.name}</h1>
                <p className='text-gray-600 text-[12px]'>{tx.date}</p>
              </div>
            </div>
            <div className='text-right'>
              <h1 className='font-semibold'>{tx.amount}</h1>
              <p className='text-green-500 text-xs'>{tx.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
