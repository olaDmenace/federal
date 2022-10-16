import axios from "axios"

export default axios.create({
    baseURL: 'http://165.227.147.218:8083',
    headers:{
    accept:'*/*',
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin': '*',        
    },    
});