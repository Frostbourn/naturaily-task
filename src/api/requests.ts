import axios from 'axios';

const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

const client = axios.create(defaultOptions);

const logIn = (username: string, password: string) => {
  return client.post('/login', {
    username,
    password,
  });
};

const getUserDetails = (token: string) => {
  return client.get('/user', {
    headers: {
      Authorization: `${token}`,
    },
  });
};

const exportedObject = {
  logIn,
  getUserDetails,
};

export default exportedObject;
