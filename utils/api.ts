import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

const env = process.env.NODE_ENV;
const BASE_URL =
  env === "development"
    ? "http://localhost:5000/api"
    : "https://kluster-api.up.railway.app/api/";

const instance = axios.create({
  baseURL: BASE_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // Add the access token to the request headers (if available)
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    const token = localStorage.getItem("accessToken");

    const decodedData = token && jwtDecode(token);
    if (decodedData && (decodedData?.exp as any) < Date.now() / 1000) {
      localStorage.clear();
      redirect("/sign-in");
    }

    return config;
  },
  (error) => {
    console.log(error, "Error +++++++++++++");

    return Promise.reject(error);
  }
);

export default instance;
