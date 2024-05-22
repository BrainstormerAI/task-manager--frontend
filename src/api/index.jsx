import axios from "axios";

const api = axios.create({
  baseURL: "http://3.109.202.121:5000/api",
});
export default api;
