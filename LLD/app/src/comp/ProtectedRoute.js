import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

  
  // Write Authentication Logic
  // Make login API call, check the token is valid or not
  const isAuthenticated = true;

  // return  isAuthenticated ? children : <Navigate to={'/login'}/>

  return  isAuthenticated ? <Outlet/> : <Navigate to={'/login'}/>

}

export default ProtectedRoute
