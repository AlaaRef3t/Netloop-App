import React, { useContext, useEffect, useState } from 'react'
import Styles from './Home.module.css'
import { PostContext } from '../../Context/PostContext'
import PostCard from '../PostCard/PostCard';
import PostCardLoader from '../PostCardLoader/PostCardLoader';
import AddPost from '../AddPost/AddPost';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { TokenContext } from '../../Context/TokenContext';




export default function Home() {
 
let {token } = useContext(TokenContext)
   function getAllPosts() {
    let headers = {
      token: localStorage.getItem("userToken")
    }

    return axios.get(`https://linked-posts.routemisr.com/posts?page=LAST_PAGE&limit=100&sort=-createdAt`, {
      headers
    })

  }

  let { data, isLoading, isError, isPending, isFetching, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: getAllPosts,
    select: (data) => data.data,
    retry: 2,
    staleTime: 30 * 1000,
    // refetchInterval: 2000,
    gcTime: 5 * 60 * 1000,
    enabled:token === null ? false : true
  });

  // console.log(data);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full mt-12">

            {isPending ? <PostCardLoader /> : <>

              <AddPost user={data} />
              {data?.posts?.map((post) => <PostCard post={post} key={post._id} />)}

            </>}
            {isError ? <p className='text-red-800 text-center text-3xl mt-10'>{error.message}</p> : null}

          </div>
        </div>
      </div>

    </>
  )
}
