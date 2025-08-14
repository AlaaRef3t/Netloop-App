import React, { useContext, useEffect, useState } from 'react'
import Styles from './UserPosts.module.css'
import { PostContext } from '../../Context/PostContext';
import PostCard from '../PostCard/PostCard';
import PostCardLoader from '../PostCardLoader/PostCardLoader';
import AddPost from '../AddPost/AddPost';


export default function UserPosts() {
  let { getUserData, getUserPosts } = useContext(PostContext);
  const [profilePosts, setProfilePosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function getUserDataBridge() {
    let response = await getUserData();
    // console.log(response._id)

    let postsData = await getUserPosts(response._id)

    // console.log(postsData)
    setProfilePosts(postsData.reverse())
    setIsLoading(false)
  }

  // console.log(profilePosts);

  useEffect(() => {
    getUserDataBridge();
  }, [])
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full mt-12">
            {isLoading ? <PostCardLoader /> : <>
              <AddPost callback={getUserDataBridge} />
              {profilePosts.map((userPost) => <PostCard callback={getUserDataBridge} key={userPost._id} post={userPost} />
              )}
           
           
            </>
            
            }
          </div>
        </div>
      </div>
    </>
  )
}
