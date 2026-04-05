import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react';
import { getCurrentUser } from './services/api';
import { useDispatch, useSelector } from 'react-redux';
export const serverUrl="http://localhost:5000";

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    getCurrentUser(dispatch);
  },[dispatch])
  const {userData}=useSelector((state)=>state.user);
  console.log(userData)
  return (<>
  <Routes>
      <Route path='/' element={userData?<Home/>:<Auth/>}/>
      <Route path='/auth' element={userData ? <Navigate to="/" replace /> : <Auth/>}/>
      <Route path='*' element={<Navigate to={userData ? "/" : "/auth"} replace />}/>
    </Routes>
    </>

    
  )
  
}

export default App