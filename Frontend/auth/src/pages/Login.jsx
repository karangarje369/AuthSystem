import {React,useState, useContext} from 'react'
import { loginAPI } from '../api/authApi'
import { AuthContext } from '../AuthContext'

const Login = () => {
    let {login} = useContext(AuthContext) // we get the context to the AuthContext component also takes method login this is like wiring and getting electricity
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handelSubmit = async (e) => {
        e.preventDefault()
        let obj = {
            email,password
        }
        const response = await loginAPI(obj); // actually we feed details to login url 
        const token = response.data.token; // gets object in response with our token 
        login(token); // Throws the token up into the global cloud!
    }
  return (
    <div className='w-full h-2/4  flex-1 flex items-center justify-center' >
        <form className='flex flex-col gap-2 rounded-sm border border-white p-6 bg-gray-500 shadow shadow-black' onSubmit={handelSubmit}>
        <input className='bg-white rounded-sm p-2 text-black' type="text" placeholder='Email' value={email} 
        onChange={(e)=> {
            setEmail(e.target.value)
        }} />

        <input className='bg-white rounded-sm p-2 text-black' type="text" placeholder='Password' value={password} 
        onChange={(e)=> {
            setPassword(e.target.value)
        }} />         
        <button className='bg-black text-white rounded-xl ' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login