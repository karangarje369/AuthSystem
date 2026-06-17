import {React,createContext,useState} from 'react'

export const AuthContext = createContext() //this is a context of this specific component 

export const AuthProvider = ({children}) => { // this is actual logic of if want to add context for ex: we have token so login sends token we add it to state if logout then vanish it 
    const [token,setToken] = useState(localStorage.getItem("token"))
    const login = (userToken) => {
        console.log(userToken)
        localStorage.setItem("token",userToken)
        setToken(userToken)
    }
    const logout = () => {
        localStorage.removeItem("token")
        setToken(null)
    }
    return (<AuthContext.Provider value={{token, login, logout}}>{children}</AuthContext.Provider>) // this is something that helps us take ex.parameters
}