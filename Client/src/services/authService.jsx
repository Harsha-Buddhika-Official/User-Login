import axios from 'axios';

export const registerUser = async (userData) => {
  return await axios.post('http://localhost:5001/register', userData);
}

export const loginUser = async (loginData) => {
  return await axios.post('http://localhost:5001/login', loginData);
}