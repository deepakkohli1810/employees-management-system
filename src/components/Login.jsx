import React, { useState } from 'react'

const Login = () => {
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e)=>{
      e.preventDefault()
     console.log("email is", email)
     console.log("password is", password)
     setEmail('')
     setPassword('')
    }

  return (
    <div className=' w-screen h-screen flex items-center justify-center'>
      <div className='border-2  px-20 py-24 border-emerald-500  bg-white rounded-2xl'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex flex-col items-center justify-center'>
        <input 
          value={email}
          onChange={(e)=>{
          setEmail(e.target.value)
        }}
        required
        className='border-2 text-white outline-none bg-transparent border-emerald-500 rounded-full  py-3 px-5 text-xl'
         type="email" placeholder='Enter your email' />

        <input
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        required
         className='border-2 text-white outline-none bg-transparent border-emerald-500 rounded-full  py-3 px-5 text-xl mt-4'
         type="password" placeholder='Enter password' />

         <button
         className=' text-white outline-none bg-emerald-500 rounded-full py-3 px-5 text-xl mt-5'
         > Login </button>
      </form>
      </div>
     
    </div>
  )
}

export default Login
