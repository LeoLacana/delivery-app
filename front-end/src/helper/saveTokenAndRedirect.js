const saveTokenAndRedirect = (redirect, user) => {
  const { role } = user;

  localStorage.setItem('user', JSON.stringify(user, null, 2));

  if (role === 'customer') {
    redirect(`/${role}/products`);
  } else {
    redirect(`/${role}/orders`);
  }
};

export default saveTokenAndRedirect;
