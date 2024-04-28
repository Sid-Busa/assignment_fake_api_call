import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const handleRedirectLogin = () => {
  window.location.href = "/";
};

const requestHandler = async (request) => {
  return request;
};

const responseHandler = (response) => {
  return response.data;
};

const errorHandler = (error, isPublicAPI) => {
  if (!isPublicAPI && error.response?.status === 401) {
    handleRedirectLogin();
  }
  return Promise.reject(error);
};

API.interceptors.request.use(
  (request) => requestHandler(request, true),
  (error) => errorHandler(error, true)
);

API.interceptors.response.use(
  (response) => responseHandler(response, true),
  (error) => errorHandler(error, true)
);

export default API;
