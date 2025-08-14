import axios from "axios";
import { createContext } from "react";
import toast from "react-hot-toast";

export let PostContext = createContext();

export default function PostContextProvider({ children }) {

    let headers = {
        token: localStorage.getItem("userToken")
    }

    async function getAllPosts() {
        let headers = {
            token: localStorage.getItem("userToken")
        }
        try {

            let { data } = await axios.get(`https://linked-posts.routemisr.com/posts?limit=50`, {
                headers
            })

            return data.posts;
        } catch (error) {
            console.log(error);
        }
    }
    async function getSinglePost(id) {

        try {

            let { data } = await axios.get(`https://linked-posts.routemisr.com/posts/${id}`, {
                headers
            })
            // console.log(data);

            return data.post;
        } catch (error) {
            console.log(error);

        }
    }
    async function getUserData() {

        try {

            let { data } = await axios.get(`https://linked-posts.routemisr.com/users/profile-data`, {
                headers
            })
            // console.log(data , "from user data");

            return data.user;
        } catch (error) {
            console.log(error);

        }
    }

 async function getUserPosts(id) {
        try {
            let { data } = await axios.get(`https://linked-posts.routemisr.com/users/${id}/posts?limit=2`, {
                headers
            })
            // console.log(data , "from user posts");

            return data.posts;

        } catch (error) {
            console.log(error);

        }
    }


    async function addComment(body) {
        try {
            let { data } = await axios.post(`https://linked-posts.routemisr.com/comments`, body, {
                headers
            })
            // console.log(data, "from add comment");
            toast.success('Comment Successfully Added!')
            return data.comments;

        } catch (error) {
            console.log(error);
            toast.error('Comment failed!')

        }
    }
   

    return <PostContext.Provider value={{ getAllPosts, getSinglePost, getUserData, getUserPosts,addComment }}>
        {children}
    </PostContext.Provider>

}