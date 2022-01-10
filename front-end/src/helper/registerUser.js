import api from './api';

const registerUser = async ({ name, email, password }) => {
  try {
    const successStatus = 201;
    const { status, message } = await api.post('/register', { name, email, password });

    if (status === successStatus) return { err: message };

    return { err: null };
  } catch (err) {
    return { err: err.message };
  }
};

export default registerUser;
