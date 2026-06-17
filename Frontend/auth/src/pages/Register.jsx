import React, { useState } from 'react'
import { registerAPI } from '../api/authApi'
import { useNavigate } from "react-router-dom";
const Register = () => {
    const [username,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
   async function  handelSubmit(e){
      e.preventDefault()
      let obj = {
        username,
        email,
        password
      }
      let response = await registerAPI(obj)
      let message =  response.data
      navigate("/login");

    }
  return (
    <div className='w-full h-2/4  flex-1 flex items-center justify-center'>
      <form className='flex flex-col gap-2 rounded-sm border border-white p-6 bg-gray-500 shadow shadow-black ' onSubmit={handelSubmit}>
      <input className='bg-white rounded-sm p-2 text-black'  type="text" placeholder='name'
      onChange={(e)=>{
        setName(e.target.value)
      }}
      />
       <input className='bg-white rounded-sm p-2 text-black' type="text" placeholder='email'
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />
       <input className='bg-white rounded-sm p-2 text-black' type="password" placeholder='password'
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />

      <button className='bg-black text-white rounded-xl ' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Register