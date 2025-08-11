import React from 'react'
import Styles from './NotFound.module.css'
import ImageNotFound from '../../assets/1.jpg'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src={ImageNotFound} alt="Error404 Image " className='py-[60px] ' />
        
      
      </div>   
      <div className="text-center">
      <Link to={"/login"}  className='px-2 py-2 bg-blue-700 text-white rounded-2xl cursor-pointer'>Get Back </Link>
        
    </div>
    </>
  )
}
