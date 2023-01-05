import axios from "axios"

export const makeRequest = axios.create({
    baseURL: "/",
    withCredentials: true,
})

//baseURL: "http://localhosts:8080/api/",