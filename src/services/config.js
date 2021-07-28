import axios from 'axios'
const dbConfig = require('../config/config.json')['development'];

export const http = axios.create({   
    baseURL: dbConfig.host
})

