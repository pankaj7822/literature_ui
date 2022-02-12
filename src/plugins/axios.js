import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const axiosBase = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers:{'Content-Type': 'application/json'}
});

Vue.use(VueAxios, axiosBase);

export default axiosBase;
