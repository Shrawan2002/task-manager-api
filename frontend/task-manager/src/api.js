import axios from "axios";

const API = axios.create({baseURL: "http://localhost:5000/api"});


// interceptors.request.use() tells Axios:
// 👉 "Before you send any request, run this function and let me modify the request config."
// Add token automatically
API.interceptors.request.use((req)=>{
    const token = localStorage.getItem("token");
    if(token){
        req.headers.authorization = `Bearer ${token}`;
    }

    return req;
});

export default API;