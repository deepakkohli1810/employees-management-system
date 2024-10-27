import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello, <br />
      <span className='text-3xl font-semibold'> Deepak 👋</span></h1>
      <button className='text-lg bg-red-500 font-medium px-4 py-2 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header
