import React, { useContext, useEffect, useState } from 'react'
import Styles from './PostDetails.module.css'
import { useParams } from 'react-router-dom'
import { PostContext } from '../../Context/PostContext'
import PostCard from '../PostCard/PostCard'
import PostCardLoader from '../PostCardLoader/PostCardLoader'

export default function PostDetails() {

  let { id } = useParams()
  let { getSinglePost } = useContext(PostContext)
  const [singlePost, setSinglePost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)


  async function getSinglePostBridge(id) {
    let response = await getSinglePost(id);
    console.log(response);
    setSinglePost(response);
    setIsLoading(false);

  }

  useEffect(() => {
    getSinglePostBridge(id)
  }, [])
  // console.log(id);



  return (
    <>

      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full mt-12">
            {isLoading ? <PostCardLoader /> : <PostCard post={singlePost} />}

            
          </div>
        </div>
      </div>
    </>
  )
}
