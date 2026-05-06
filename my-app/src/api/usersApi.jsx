import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

 
export const getUsers = () => API.get("/users");

 
export const getUser = (id) => API.get(`/users/${id}`);

 
export const deleteUser = (id) => API.delete(`/users/${id}`);

 
export const updateUser = (id, data) =>
  API.put(`/users/${id}`, data);
 
export const createUser = (data) => API.post("/users", data);