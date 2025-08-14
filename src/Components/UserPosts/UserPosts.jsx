import React, { useContext, useEffect, useState } from 'react'
import Styles from './UserPosts.module.css'
import { PostContext } from '../../Context/PostContext';


export default function UserPosts() {
  let { getUserData, getUserPosts } = useContext(PostContext);
  const [userPosts, setUserPosts] = useState([])

  async function getUserDataBridge() {
    let response = await getUserData();
    // console.log(response._id)
    
    

    let postsData = await getUserPosts(response._id)

    console.log(postsData)
    setUserPosts(postsData)
  }

  console.log(userPosts);
  
  useEffect(() => { 
    getUserDataBridge();
  },[])
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1>Profile posts will appear here</h1>

      </div>
    </>
  )
}
