import React from 'react'
import {  Route, Routes } from 'react-router-dom' //import React router from 'react-router
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Header from '../components/layouts/Header'
import Landing from '../components/layouts/Landing'



const Routers = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element ={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
    </Routes> </>
  )
}

export default Routers