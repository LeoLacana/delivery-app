import { postApi } from './index';

const registerUser = async ({ name, email, password }) => {
  try {
    const successMessage = /sucesso/;
    const { message } = await postApi('/register', { name, email, password });

    if (successMessage.test(message)) return { err: null };

    return { err: message };
  } catch (err) {
    return { err: err.message };
  }
};

export default registerUser;
