import axios from "axios";

let api = axios.create({
  baseURL: "https://backend-webjump.herokuapp.com/api/V1/categories/",

  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default api;
