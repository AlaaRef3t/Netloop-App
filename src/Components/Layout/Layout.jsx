import React from 'react'
import Styles from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <>
      <div className='dark:bg-gray-900 dark:text-white'>
        <Navbar />
        <Outlet />
        <Footer/>
      </div>

    </>
  )
}
