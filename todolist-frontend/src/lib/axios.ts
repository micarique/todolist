import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/tasks", // endpoint da sua API Spring
});

export default api;