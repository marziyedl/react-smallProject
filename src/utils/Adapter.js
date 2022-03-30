import axios from "axios";

const qs = require("qs");

export const Adapter = axios.create({
  timeout: 30000,

  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

//  handle API errors
Adapter.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    alert("error!", error);
    return Promise.reject(error);
  },
);
