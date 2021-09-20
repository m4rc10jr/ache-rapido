import axios from 'axios'
const dbConfig = require('../config/config.json')['prod'];

export const http = axios.create({   
    baseURL: dbConfig.host
})

