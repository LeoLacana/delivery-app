import api from './api';

const loginAndRedirect = async ({ email, password }, redirect) => {
  try {
    const { data: user } = await api.post('/login', { email, password });
    const { role } = user;

    localStorage.setItem('user', JSON.stringify(user, null, 2));

    if (role === 'customer') redirect(`/${role}/products`);
    else redirect(`/${role}/orders`);

    return { err: null };
  } catch (err) {
    return err.message.includes('404')
      ? { err: err.message }
      : { err: 'Tente novamente mais tarde' };
  }
};

export default loginAndRedirect;
