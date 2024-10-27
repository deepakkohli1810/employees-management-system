import React from 'react'
import Header from '../../Others/Header'

const AdminDashboard = () => {
  return (
    <div className='p-10 h-screen w-full'>
      <Header/>
      <div className='p-10'>
        <form className='flex items-start justify-between'>
            <div>
            <h3>Task title</h3>
            <input type="text" placeholder='Make a UI design' />
            </div>
             <div>
             <h3>Description</h3>
             <textarea name="" id=""></textarea>
             </div>
              <div>
                <h3>Date</h3>
                <input type="date" />
              </div>
             <div>
             <h3>Assign To </h3>
             <input type="text" placeholder='Employee Name ' />
             </div>
             <div>
             <h3>Category</h3>
             <input type="text"  placeholder='Desing, dev etc.'/>
             </div>
            <button>Create Task </button>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
