import axios from 'axios';

export const registerUser = async (userData) => {
  return await axios.post('http://localhost:5000/api/register', userData, );
}