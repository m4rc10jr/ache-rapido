import axios from 'axios'

export const http = axios.create({
    //baseURL: 'http://localhost:8001/api/'       
    baseURL: 'http://localhost:81/api'
})