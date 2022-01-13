import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const getToken = () => {
  const userStorage = localStorage.getItem('user');
  const { token } = JSON.parse(userStorage);

  return token;
};

export const getApi = async (route, setState) => {
  const response = await api.get(route);

  setState(response.data);
};

export const getApiWithToken = async (route, setState) => {
  const token = getToken();

  const response = await api.get(
    route,
    { headers: { Authorization: token } },
  );

  setState(response.data);
};

export const postApi = async (route, body) => {
  const response = await api.post(route, body);

  return response.data;
};

export const postApiWithToken = async (route, body) => {
  const token = getToken();

  const response = await api.post(
    route,
    body,
    { headers: { Authorization: token } },
  );

  return response.data;
};
