import React from 'react';

const savingPlans = [
  {
    title: 'Bali Vacation',
    targetDate: 'Target August 25 2022',
    amount: '$ 1950,21',
    goal: '$4000',
    percentage: 48,
    filledColor: '#4644a4',
    textColor: '#4644a4',
  },
  {
    title: 'New Gadget',
    targetDate: 'Target August 25 2022',
    amount: '$ 1950,21',
    goal: '$4000',
    percentage: 79,
    filledColor: '#F8BA32',
    textColor: '#CA8A04',
  },
  {
    title: 'Charity',
    targetDate: 'Target August 25 2022',
    amount: '$ 1950,21',
    goal: '$4000',
    percentage: 32,
    filledColor: '#3BBA6F',
    textColor: '#3BBA6F',
  },
];

const SavingPlan = () => {
  return (
    <div className='bg-white w-full font-jakarta rounded-lg mt-4 lg:mt-0 p-4'>
      <div className='flex justify-between'>
        <h1 className='font-bold'>Saving Plan</h1>
        <button className='text-[#4644a4] cursor-pointer'>See All</button>
      </div>
      <hr className='text-gray-300 my-4' />
      <ul className='flex flex-col gap-6'>
        {savingPlans.map((plan, index) => (
          <li key={index}>
            <div className='flex justify-between text-xs'>
              <h1 className='font-medium text-sm'>{plan.title}</h1>
              <p className='text-gray-700'>{plan.targetDate}</p>
            </div>
            <div className='flex justify-between my-4'>
              <h1 className='font-semibold'>
                {plan.amount} <span className='text-[10px] text-gray-400'>/{plan.goal}</span>
              </h1>
              <p className={`font-semibold`} style={{ color: plan.textColor }}>
                {plan.percentage}%
              </p>
            </div>
            <div className='h-2 flex'>
              <div
                className='rounded-full'
                style={{
                  width: `${plan.percentage}%`,
                  backgroundColor: plan.filledColor,
                }}
              />
              <div
                className='bg-gray-100 rounded-r-full'
                style={{
                  width: `${100 - plan.percentage}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavingPlan;
