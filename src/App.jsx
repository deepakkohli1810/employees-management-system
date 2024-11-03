import React, { useEffect } from 'react'
import Login from './components/Login'
import EmployeesDashboard from './components/Auth/Dashboard/EmployeesDashboard'
import AdminDashboard from './components/Auth/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage'
const App = () => {

  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
    
  },)
  
  return (

  < >

  <Login/>
  {/* <EmployeesDashboard/> */}
  {/* <AdminDashboard/> */}
  
  </>
  )
}

export default App
