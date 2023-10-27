import { useState } from 'react'

import './App.css'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import TransactionProgress from './pages/TransactionProgress'
import AdminPanel from './pages/AdminPanel'
import AdminOrders from './pages/AdminOrders'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {

<<<<<<< HEAD
  return (
    <>
      <LandingPage/>
    </>
  )
=======
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route exact path="signup" element={<SignUp />} />
        <Route exact path="adminpanel" element={<AdminPanel />} />
        <Route exact path="orders" element={<AdminOrders />} />
        <Route exact path="transaction-progress" element={<TransactionProgress />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
>>>>>>> b2f6344452ea806fdb5f7c3136b0c7449d43e97c
}

export default App
