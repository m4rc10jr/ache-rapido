import axios from 'axios'
const dbConfig = require('../config/config.json')['dev'];

export const http = axios.create({   
    baseURL: dbConfig.host
})

