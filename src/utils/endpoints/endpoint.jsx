import axios from "axios";
import { logout } from "../features/userSlice";
import { useDispatch } from "react-redux";

const endpoint = axios.create({
  baseURL: "https://trucking-api.axle-cartage.com",
  // timeout: 10000,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Add a request interceptor
endpoint.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
endpoint.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      // Token expired or invalid
      const dispatch = useDispatch();
      dispatch(logout());
    }
    return Promise.reject(error);
  }
);

export default endpoint;
