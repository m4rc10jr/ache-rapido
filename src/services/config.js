import axios from 'axios'
const dbConfig = require('../config/config.json')['production'];

export const http = axios.create({   
    baseURL: dbConfig.host
})

