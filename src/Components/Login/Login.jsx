import React, { useContext, useState } from 'react'
import Styles from './Login.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PulseLoader from './../../../node_modules/react-spinners/esm/PulseLoader';
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { BiSolidShow } from "react-icons/bi";
import { TokenContext } from '../../Context/TokenContext';
import LoginImage from '../../assets/login2.png'
import { motion } from "motion/react"

export default function Login() {
  let { token, setToken } = useContext(TokenContext)
  const [showPassword, setShowPassword] = useState(true)

  let schema = z.object({
    email: z.string().nonempty("Email is Required").email("Email not valid"),
    password: z.string().nonempty("Password is Required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Invalid password ")
  })

  let { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  let Navigate = useNavigate()
  async function onSubmit(values) {

    console.log(values)

    try {
      let { data } = await axios.post("https://linked-posts.routemisr.com/users/signin", values)
      console.log(data);
      if (data.message == 'success') {
        localStorage.setItem("userToken", data.token)
        setToken(data.token)
        Navigate("/")
      }
    } catch (error) {
      console.log(error.response.data.error)
      setError("root", { message: error.response.data.error })
    }
  }

  return (
    <>

      <div className="container mx-auto">
        <div className='main-style py-[95px] '>
          <div className="flex flex-col md:flex-row md:items-center md:justify-around flex-wra">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className='sm:w-full md:w-1/2 lg:w-1/3'>
              <img src={LoginImage} className={Styles.login__image} alt="" />
            </motion.div>
            <motion.div className="sm:w-full md:w-1/2 lg:w-1/4"
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}>
              <h1 className='text-blue-600 font-bold text-4xl text-2xl my-4 text-center ' >Netloop App</h1>

              <div className=" mx-auto shadow-lg p-4 bg-white py-5 mobScreen">
                <h1 className='text-black-800  text-2xl my-5 text-center  dark:text-black ' >Login to Netloop App</h1>

                <form onSubmit={handleSubmit(onSubmit)}>


                  <input {...register("email")} type="email" placeholder="Type Your Email..." className="input input-neutral w-full focus:outline-0 border-slate-400 my-2" />
                  {errors.email ? <p className='text-red-800'>{errors.email.message}</p> : null}

                  <div className="relative">
                    <input {...register("password")} type={showPassword ? 'password' : 'text'} placeholder="Type Your Password..." className=" input input-neutral w-full focus:outline-0 border-slate-400 my-2" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className=" hover:text-blue-500 transition absolute right-3 top-1/2 -translate-y-1/2 text-sm text-blue-700 z-2 text-xl cursor-pointer"
                    ><BiSolidShow /></button>
                  </div>
                  {errors.password ? <p className='text-red-800'>{errors.password.message}</p> : null}

                  {errors.root && <p className='text-red-800'>{errors.root.message}</p>}

                  <button
                    disabled={isSubmitting}

                    type='submit'
                    className=" hover:bg-blue-500 transition w-full cursor-pointer my-3 mt-5  px-4 py-3 text-white overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group"
                  >
                    {isSubmitting ? <> Loading <PulseLoader color="#ffffff" size={5} /> </> : 'Login'}

                  </button>

                </form>
                <span className="text-sm text-gray-600">
                  Not registered?
                  <a href="/register" className="text-blue-800 underline font-semibold hover:text-blue-600 transition">
                    Create account
                  </a>
                </span>
              </div>
            </motion.div>
          </div>


        </div>
      </div>

    </>
  )
}
