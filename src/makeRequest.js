import axios from "axios";

export const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  // process.env.REACT_APP_API_URL
  headers: {
    //Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
    Authorization: "bearer " + import.meta.env.VITE_REACT_APP_API_TOKEN,
  },
});
