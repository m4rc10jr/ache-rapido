import axios from 'axios'

export const http = axios.create({   
    //baseURL: 'http://localhost:8001/api'
    baseURL: 'http://167.99.6.129:81/api'
})