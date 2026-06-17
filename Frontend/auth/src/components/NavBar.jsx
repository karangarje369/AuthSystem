import {React,useContext} from 'react'
import { AuthContext } from '../AuthContext'
import { Link } from 'react-router-dom'

const NavBar = () => {
    let {logout,token} = useContext(AuthContext)
  return (
    <nav className='flex h-10 justify-around bg-gray-400 w-full pt-2 pb-1 font-bold shadow shadow-gray-300' >
        <Link to="/"  >My app</Link>
        {
            token ?(
                <div className='flex gap-10'>
                   <button>Dashboard</button>
                   <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div className='flex gap-10'>
                 <Link to="/login"  >Login</Link>
                 <Link to="/register"  >register</Link>
                </div>
            )
        }
    </nav>
  )
}

export default NavBar