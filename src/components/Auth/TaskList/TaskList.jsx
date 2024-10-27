import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist'
    className='  h-[63%] w-full mt-10 py-8
    flex items-center justify-start gap-5 flex-nowrap overflow-x-auto rounded-xl '>
        <div className= 'flex-shrink-0 h-full w-[350px] p-5 bg-red-400 rounded-xl'>
       <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
        <h4 className=' text-base font-sm'>28 Oct , 2024</h4>
       </div>
       <h2 className='mt-4 text-2xl font-semibold'>Complete the react course </h2>
       <p className='mt-4 text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt aperiam nihil rerum iure sapiente saepe eaque iste quod ratione, doloremque nam nobis alias illo explicabo. Ab exercitationem nisi id!</p>
        </div>
        <div className= 'flex-shrink-0 h-full w-[350px] p-5 bg-blue-400 rounded-xl'>
       <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
        <h4 className=' text-base font-sm'>28 Oct , 2024</h4>
       </div>
       <h2 className='mt-4 text-2xl font-semibold'>Complete the react course </h2>
       <p className='mt-4 text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt aperiam nihil rerum iure sapiente saepe eaque iste quod ratione, doloremque nam nobis alias illo explicabo. Ab exercitationem nisi id!</p>
        </div>
        <div className= 'flex-shrink-0 h-full w-[350px] p-5 bg-yellow-400 rounded-xl'>
       <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
        <h4 className=' text-base font-sm'>28 Oct , 2024</h4>
       </div>
       <h2 className='mt-4 text-2xl font-semibold'>Complete the react course </h2>
       <p className='mt-4 text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt aperiam nihil rerum iure sapiente saepe eaque iste quod ratione, doloremque nam nobis alias illo explicabo. Ab exercitationem nisi id!</p>
        </div>
        <div className= 'flex-shrink-0 h-full w-[350px] p-5 bg-pink-400 rounded-xl'>
       <div className='flex items-center justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded font-semibold'>High</h3>
        <h4 className=' text-base font-sm'>28 Oct , 2024</h4>
       </div>
       <h2 className='mt-4 text-2xl font-semibold'>Complete the react course </h2>
       <p className='mt-4 text-l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit incidunt aperiam nihil rerum iure sapiente saepe eaque iste quod ratione, doloremque nam nobis alias illo explicabo. Ab exercitationem nisi id!</p>
        </div>
          
    </div>
  )
}

export default TaskList
