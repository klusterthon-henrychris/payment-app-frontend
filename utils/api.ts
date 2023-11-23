import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:5000/api/",
// });

const instance = axios.create({ baseURL: "http://localhost:5000/api/" });

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Retrieve the access token from where you store it (localStorage, cookies, etc.)
    const accessToken = localStorage.getItem("accessToken");

    // Add the access token to the request headers (if available)
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
