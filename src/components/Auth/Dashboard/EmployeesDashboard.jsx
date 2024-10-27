import React from 'react'
import Header from '../../Others/Header'
import TaskCount from '../../Others/TaskCount'
import TaskList from '../TaskList/TaskList'

const EmployeesDashboard = () => {
  return (
    <div className='text-white p-20 bg-[#1C1C1C1] h-screen'>
        <Header/>
        <TaskCount/>
        <TaskList/>
    </div>
  )
}

export default EmployeesDashboard
