import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ProfileImg from '../../assets/profile.jpg'
import { TokenContext } from '../../Context/TokenContext'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { MdEmail } from "react-icons/md";

export default function Navbar() {
    const [showText, setShowText] = useState(false)
    let { token, setToken } = useContext(TokenContext)
    let navigate = useNavigate()


    function getUserData() {
        let headers = {
            token: localStorage.getItem("userToken")
        }

        return axios.get(`https://linked-posts.routemisr.com/users/profile-data`, {
            headers
        })
    }

    let { data } = useQuery({
        queryKey: ["userData"],
        queryFn: getUserData,
        select: (data) => data.data.user
    })


    function logOut() {
        localStorage.removeItem("userToken")
        setToken(null)
        navigate("/login")
    }

    console.log(data);


    return (
        <>
            {token ? (
                <div className="navbar bg-base-100 shadow-lg mb-4 w-[95%] mx-auto fixed z-4 top-0 left-0 right-0 flex items-center ">

                    <div className="flex-1">
                        <Link to={"/"} className="italic btn btn-ghost text-blue-800 font-[900] md:text-2xl">
                            Netloop Posts
                        </Link>
                    </div>

                    <ul className="hidden md:flex gap-4 items-center absolute left-1/2 -translate-x-1/2">
                        <li><NavLink to={"/"}><IoHome size={24} /></NavLink></li>
                        <li><NavLink to={"/userPosts"}><FaUser size={22} /></NavLink></li>
                        <li><a className='cursor-pointer' onClick={logOut}><IoLogOut size={27} /></a></li>
                    </ul>

                    <div className="flex gap-2 items-center justify-end flex-1 ">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <img src={data} className='cursor-pointer' alt="Profile" onClick={() => setShowText(!showText)} />
                        </div>
                        {showText && (
                            <div className="absolute right-0 mt-46 w-55 bg-white shadow-lg rounded-lg overflow-hidden z-10 ">

                                

                                <button
                                    className="cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-black-500"
                                    
                                >
                                 Welcome {data.name}!
                                </button>
                                <button
                                    
                                    className="cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-black-500 "
                                >
                                     {data.email}

                                </button>
                                <button
                                    
                                    className="cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-black-500"
                                >
                                    Change Profile pic
                                </button>
                            </div>
                        )}

                        <div className="dropdown dropdown-end md:hidden">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li><NavLink to={"/"}>Home</NavLink></li>
                                <li><NavLink to={"/userPosts"}>User Posts</NavLink></li>
                                <li><button onClick={logOut}>Logout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}
