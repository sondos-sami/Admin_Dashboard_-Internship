import axios from "axios";

const API_URL = "http://localhost:3001";

export const loginRequest = async (email, password) => {
  const res = await axios.get(
    `${API_URL}/admin?email=${email}&password=${password}`,
  );

  return res.data;
};
