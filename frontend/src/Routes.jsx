
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Main from './presignup/Main';
import SignUp from './Signing/SignUp';
import Dashboard from './Signing/Dashboard';
const Links = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<div>hgdt</div>} />  
    </Routes>
  )
}

export default Links;