import React from 'react'
import Styles from './ProtectedAuth.module.css'
import { Navigate } from 'react-router-dom'

export default function ProtectedAuth({children}) {

  if (localStorage.getItem("userToken")) {
    return <Navigate to={"/"}></Navigate>
  } else {
    return children
  }
}
