import React, { useState } from 'react'
import Styles from './Register.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PulseLoader from './../../../node_modules/react-spinners/esm/PulseLoader';
import * as z from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { BiSolidShow } from "react-icons/bi";
import RegisterImage from '../../assets/sign2.png'
import { motion } from "motion/react"
import toast from 'react-hot-toast';

export default function Register() {

  const [showPassword, setShowPassword] = useState(true)

  let schema = z.object({
    name: z.string().nonempty("Name is Required").min(3, "Not less than 3 chars"),
    email: z.string().nonempty("Email is Required").email("Email not valid"),
    password: z.string().nonempty("Password is Required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Invalid password should be something like Ara@2025"),
    rePassword: z.string().nonempty("Password is Required").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, "Invalid password should be something like Ara@2025"),
    dateOfBirth: z.string().nonempty("Date is Required"),
    gender: z.enum(["male", "female"])
  })
    .refine((matchData) => matchData.password == matchData.rePassword, {
      message: "Password Not Match",
      path: ["rePassword"]
    })

  let { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) })
  let Navigate = useNavigate()

  async function onSubmit(values) {
    try {
      let { data } = await axios.post("https://linked-posts.routemisr.com/users/signup", values)
        toast.success('successfully registered!')

      if (data.message === 'success') {
        Navigate("/login")
      }
    } catch (error) {
      setError("root", { message: error.response.data.error })
        toast.error('Failed to register!')

    }
  }

  return (
    <>
      <div className="container mx-auto">
        
      <div className='main-style py-[50px]' >
        <div className="flex flex-col md:flex-row md:items-center md:justify-around flex-wrap-reverse">


          <motion.div className='w-full md:w-1/2 lg:w-1/3 flex justify-center'
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}>
            <img src={RegisterImage} className={Styles.register__image} alt="Register Illustration" />
          </motion.div>


          <motion.div className="w-full md:w-1/2 lg:w-1/4"
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <h1 className='text-blue-600 font-bold text-5xl text-center my-4'>Netloop App</h1>
            <div className="mx-auto shadow-lg p-4 bg-white py-5">
              <h1 className='text-black-800 font-bold text-2xl mt-5 text-center  dark:text-black'>Create a new account</h1>
              <p className='text-sm text-gray-600 text-center mb-5'>It's quick and easy.</p>

              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} type="text" placeholder="Type Your Name..." className="input input-neutral w-full focus:outline-0 border-slate-400 my-2" />
                {errors.name && <p className='text-red-800'>{errors.name.message}</p>}

                <input {...register("email")} type="email" placeholder="Type Your Email..." className="input input-neutral w-full focus:outline-0 border-slate-400 my-2" />
                {errors.email && <p className='text-red-800'>{errors.email.message}</p>}

                <div className="relative">
                  <input {...register("password")} type={showPassword ? 'password' : 'text'} placeholder="Type Your Password..." className="input input-neutral w-full focus:outline-0 border-slate-400 my-2" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:text-blue-500 text-xl absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 cursor-pointer z-2"
                  ><BiSolidShow /></button>
                </div>
                {errors.password && <p className='text-red-800'>{errors.password.message}</p>}

                <div className="relative">
                  <input {...register("rePassword")} type={showPassword ? 'password' : 'text'} placeholder="Re-type Your Password..." className="input input-neutral w-full focus:outline-0 border-slate-400 my-2" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:text-blue-500 text-xl absolute right-3 top-1/2 -translate-y-1/2 text-blue-700 cursor-pointer z-2"
                  ><BiSolidShow /></button>
                </div>
                {errors.rePassword && <p className='text-red-800'>{errors.rePassword.message}</p>}

                <input {...register("dateOfBirth")} type="date" className="input input-neutral w-full focus:outline-0 border-slate-400 my-2" />
                {errors.dateOfBirth && <p className='text-red-800'>{errors.dateOfBirth.message}</p>}

                <div className="my-2  dark:text-black">
                  <input {...register("gender")} type="radio" value="male" id='male' className="radio radio-primary" />
                  <label className='mx-2' htmlFor="male">Male</label>
                  <input {...register("gender")} type="radio" value="female" id='female' className="radio radio-primary" />
                  <label className='mx-2' htmlFor="female">Female</label>
                </div>
                {errors.gender && <p className='text-red-800'>{errors.gender.message}</p>}
                {errors.root && <p className='text-red-800'>{errors.root.message}</p>}

                <button
                  disabled={isSubmitting}
                  type='submit'
                  className="hover:bg-blue-500 transition w-full cursor-pointer my-3 mt-5 px-4 py-2 text-white font-medium bg-indigo-500 rounded-md group"
                >
                  {isSubmitting ? <>Loading <PulseLoader color="#ffffff" size={5} /></> : 'Sign Up'}
                </button>
              </form>

              <span className="text-sm text-gray-600">
                Already have an account?
                <a href="/login" className="text-blue-800 underline font-semibold hover:text-blue-600 transition">
                  Login
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
