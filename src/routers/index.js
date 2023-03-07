import React from 'react'
import {  Route, Routes } from 'react-router-dom' //import React router from 'react-router
import Login from '../components/auth/Login' // class based component
import Login2 from '../components/auth/Login2' // function based component
import Register from '../components/auth/Register'
import Register2 from '../components/auth/Register2' // function based component
import Header from '../components/layouts/Header'
import Landing from '../components/layouts/Landing'



const Routers = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Landing></Landing>}></Route>
        <Route path="/login" element ={<Login2></Login2>}></Route>
        <Route path="/register" element={<Register2></Register2>}></Route>
    </Routes> </>
  )
}

export default Routers