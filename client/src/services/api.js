import axios from "axios";

const API = axios.create({
  baseURL: "https://property-listings-backend-jsxe.onrender.com/api"
});

export default API;