import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
}) 
const useAxiosSecure = () => {

     const {logOut} = useContext(AuthContext);
     const navigate = useNavigate();

   axiosSecure.interceptors.response.use(
    response => response,
     async error => {
       
        if(
            error.response && (error.response.status === 401 || error.response.status===403)
        ){
            await logOut();
            navigate('/login')
        }
 
      return Promise.reject(error)

    }

   )


    return axiosSecure
};

export default useAxiosSecure;