import React, { useContext, useEffect, useState } from 'react'
import Styles from './Home.module.css'
import { PostContext } from '../../Context/PostContext'
import PostCard from '../PostCard/PostCard';
import PostCardLoader from '../PostCardLoader/PostCardLoader';
import AddPost from '../AddPost/AddPost';



export default function Home() {
  const [allPosts, setAllPosts] = useState([])
  let { getAllPosts } = useContext(PostContext);
  const [isLoading, setIsLoading] = useState(true)
  async function getAllPostsBridge() {
    let response = await getAllPosts();
    // console.log(response);
    setAllPosts(response);
    setIsLoading(false)
  }

  useEffect(() => {
    getAllPostsBridge();
  }, [])
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full mt-12">
            {isLoading ? <PostCardLoader /> : <>

              <AddPost />
              {allPosts?.map((post) => <PostCard post={post} key={post._id} />)}

            </>}
          </div>
        </div>
      </div>

    </>
  )
}
