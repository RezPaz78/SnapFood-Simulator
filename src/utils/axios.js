import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://snappfood.ir/mobile/",
});

export default axiosInstance;
