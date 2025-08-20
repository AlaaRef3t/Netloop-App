import React, { useContext, useEffect, useState } from 'react'
import Styles from './Home.module.css'
import { PostContext } from '../../Context/PostContext'
import PostCard from '../PostCard/PostCard';
import PostCardLoader from '../PostCardLoader/PostCardLoader';
import AddPost from '../AddPost/AddPost';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { data } from 'react-router-dom';



export default function Home() {
 

   function getAllPosts() {
    let headers = {
      token: localStorage.getItem("userToken")
    }

    return axios.get(`https://linked-posts.routemisr.com/posts?page=LAST_PAGE&limit=100&sort=-createdAt`, {
      headers
    })

  }

  let { data, isLoading, isError, isFetching, error } = useQuery({
    queryKey: ["allPosts"],
    queryFn: getAllPosts,
    select: (data) => data.data,
    retry: 2,
    // refetchInterval: 2000,
    // gcTime: 2000,
  });

  // console.log(data);

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full mt-12">

            {isLoading ? <PostCardLoader /> : <>

              <AddPost />
              {data?.posts?.map((post) => <PostCard post={post} key={post._id} />)}

            </>}
            {isError ? <p className='text-red-800 text-center text-3xl mt-10'>{error.message}</p> : null}

          </div>
        </div>
      </div>

    </>
  )
}
