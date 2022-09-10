import axios from "axios";


const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8080/",
    headers: {
        "Access-Control-Allow-Origin": "http://127.0.0.1:8080"
    }
})

export default apiClient
