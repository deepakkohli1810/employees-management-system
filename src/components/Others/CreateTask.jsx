import React from 'react'
const CreateTask = () => {
  return (
    <div>
        <div className='p-12 bg-gray-900 rounded-xl  mt-10'>
        <form className='flex items-start justify-between '>
            <div className='w-1/2 ml-20 '>
            <div >
            <h3 className='mb-1  text-white font-semibold  text-lg' >Task title</h3>
            <input className='px-3 py-2 w-[80%] rounded text-lg text-gray-500 outline-green-300 mb-4' type="text" placeholder='Make a UI design' />
            </div>
              <div>
                <h3 className='mb-1 text-white font-semibold  text-lg'>Date</h3>
                <input
                className='px-3 py-2 w-[80%] rounded text-lg text-gray-500 outline-green-300 mb-4' type="date" />
              </div>
             <div>
             <h3 className='mb-1  text-white font-semibold  text-lg'>Assign To </h3>
             <input 
             className='px-3 py-2 w-[80%] rounded text-lg text-gray-500 outline-green-300 mb-3'type="text" placeholder='Employee Name ' />
             </div>
             <div>
             <h3 className='mb-1  text-white font-semibold  text-lg'>Category</h3>
             <input className='px-3 py-2 w-[80%] rounded text-lg text-gray-500 outline-green-300 mb-4' type="text"  placeholder='Desing, dev etc.'/>
             </div>
             </div>
             <div className='w-1/2'>
             <div className=''>
             
             <h3 className='mb-1  text-white font-semibold  text-lg'>Description</h3>
             <textarea className='h-[270px] w-[80%] rounded text-gray-500 font-semibold p-5 text-xl outline-green-400' name="" id="" ></textarea>
           
            <button className='px-3 py-2 w-[80%] bg-green-500 rounded text-white text-[1.2rem] '>Create Task </button>
            </div>
            </div>
        </form>
      </div>
 
    </div>
  )
}

export default CreateTask
