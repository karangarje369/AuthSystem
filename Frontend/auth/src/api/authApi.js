import axios from "axios"

const API = axios.create(
{    baseURL:"http://localhost:3000/api/auth/",
})

export const registerAPI = (userData) => API.post("/register",userData);
export const loginAPI = (userData) => API.post("/login",userData);