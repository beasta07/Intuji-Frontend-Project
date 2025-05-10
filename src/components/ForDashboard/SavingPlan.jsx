import React from 'react'

const SavingPlan = () => {
    return (
        <div className='bg-white w-full font-jakarta rounded-lg p-4'>
            <div className='flex justify-between'>
                <h1 className='font-bold'>Saving Plan</h1>
                <button className='text-[#4644a4]'>See All</button>
            </div>
            <hr className='text-gray-300 my-4' />
            <ul className='flex flex-col gap-7'>
                <li>

                    <div className='flex justify-between  text-xs'>
                        <h1 className='font-medium text-sm'>Bali Vacation</h1>
                        <p className='text-gray-700'>Target August 25 2022</p>
                    </div>
                    <div className='flex justify-between my-4 '>
                        <h1 className='font-semibold '>$ 1950,21 <span className='text-[10px]  text-gray-400 mt-5'>/$4000</span> </h1>
                        <p className='text-[#4644a4] font-semibold '>48%</p>
                    </div>
                    <div className='h-2 flex'>
                        <div className='bg-[#4644a4] w-[48%] rounded-full '>

                        </div>
                        <div className='bg-gray-100 w-[52%] rounded-r-full '>

                        </div>

                    </div>
                </li>
                <li>

                    <div className='flex justify-between  text-xs'>
                        <h1 className='font-medium text-sm'>New Gadget</h1>
                        <p className='text-gray-700'>Target August 25 2022</p>
                    </div>
                    <div className='flex justify-between my-4 '>
                        <h1 className='font-semibold '>$ 1950,21 <span className='text-[10px]  text-gray-400 mt-5'>/$4000</span> </h1>
                        <p className='text-yellow-600 font-semibold '>79%</p>
                    </div>
                    <div className='h-2 flex'>
                        <div className='bg-[#F8BA32] w-[79%] rounded-full '>

                        </div>
                        <div className='bg-gray-100 w-[21%] rounded-r-full '>

                        </div>

                    </div>
                </li>
                <li>

                    <div className='flex justify-between  text-xs'>
                        <h1 className='font-medium text-sm'>Charity</h1>
                        <p className='text-gray-700'>Target August 25 2022</p>
                    </div>
                    <div className='flex justify-between my-4 '>
                        <h1 className='font-semibold '>$ 1950,21 <span className='text-[10px]  text-gray-400 mt-5'>/$4000</span> </h1>
                        <p className='text-[#3BBA6F] font-semibold '>32%</p>
                    </div>
                    <div className='h-2 flex'>
                        <div className='bg-[#3BBA6F] w-[32%] rounded-full '>

                        </div>
                        <div className='bg-gray-100 w-[68%] rounded-r-full '>

                        </div>

                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SavingPlan
