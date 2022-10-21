import axios from "axios"

export default axios.create({
    baseURL: 'https://dev-api.axle-cartage.com/',
    headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});