import axios from "axios"
let URI = import.meta.env.VITE_URI
const API = axios.create(
{    baseURL:{URI},
})

export const registerAPI = (userData) => API.post("/register",userData);
export const loginAPI = (userData) => API.post("/login",userData);