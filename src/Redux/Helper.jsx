import axios from "axios";

const adminUrl="https://api.escuelajs.co/api/v1"

export const baseURL=adminUrl;

const axiosInstance=axios.create(
    {
        baseURL
    }
)



export default axiosInstance