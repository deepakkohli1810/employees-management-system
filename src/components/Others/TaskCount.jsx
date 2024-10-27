import React from 'react'

const TaskCount = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
    
    <div className=' w-[45%] bg-red-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Tast</h3>
    </div>
    <div className=' w-[45%] bg-blue-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Tast</h3>
    </div>
    <div className=' w-[45%] bg-green-400 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Tast</h3>
    </div>
    <div className=' w-[45%] bg-yellow-500 rounded-xl py-6 px-9'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Tast</h3>
    </div>
      
      
    </div>
  )
}

export default TaskCount
