import axios from "axios";

const http = axios.create({
    baseURL:'http://localhost:8000/api/v1',
    headers:{
        'Content-type': 'application/json',
        Accept: 'application/json',
    }
})

http.interceptors.request.use(
    (req)=>{
        req.headers.Accept = 'application/json';
        return req;
    },
    (err)=>{
        return Promise.reject(err);
    }
)
http.interceptors.response.use(
    (res)=>{
        return res;
    },
    (err)=>{
        return Promise.reject(err.response.data)
    }
)

export default http;