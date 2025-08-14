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

            let { data } = await axios.get(`https://linked-posts.routemisr.com/posts?page=LAST_PAGE&limit=100&sort=-createdAt`, {
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
            let { data } = await axios.get(`https://linked-posts.routemisr.com/users/${id}/posts?limit=50`, {
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

    async function addNewPost(formData) {
        try {
            let { data } = await axios.post(`https://linked-posts.routemisr.com/posts`, formData, {
                headers
            })
            // console.log(data, "from add post");
            toast.success('Post Successfully Added!')

        } catch (error) {
            console.log(error);
            toast.error('Post failed!')

        }
    }

    async function deleteUserPost(id) {
        try {
            let { data } = await axios.delete(`https://linked-posts.routemisr.com/posts/${id}`, {
                headers
            })
            // console.log(data , "from delete posts");
            toast.success('Post Successfully Deleted!')


        } catch (error) {
            console.log(error);
            toast.error('Failed to Delete!')


        }
    }

    return <PostContext.Provider value={{ getAllPosts, getSinglePost, getUserData, getUserPosts, addComment, addNewPost ,deleteUserPost}}>
        {children}
    </PostContext.Provider>

}