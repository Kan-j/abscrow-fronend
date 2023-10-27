import { useState } from 'react'

import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import TransactionProgress from './pages/TransactionProgress'
import AdminPanel from './pages/AdminPanel'
import AdminOrders from './pages/AdminOrders'

function App() {

  return (
    <>
      {/* <SignUp/> */}
      {/* <Login/> */}
      {/* <LandingPage/> */}
      {/* <AdminPanel/> */}
      {/* <AdminOrders/> */}
      <TransactionProgress glowSection="Processing"/>
    </>
  )
}

export default App
