import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import md5 from 'md5';

import api from '../helper/api';
import { validateEmail, validatePassword } from '../helper/validations';

function Login() {
  const redirect = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isInvalid, setIsInvalid] = useState(true);
  const [error, setError] = useState('');

  const validateData = () => {
    if (email === '' && password === '') return;

    if (validateEmail(email) && validatePassword(password)) {
      setIsInvalid(false);
      setError('');
    } else {
      setIsInvalid(true);
      setError('Dados inválidos.');
    }
  };

  useEffect(validateData, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const encriptedPassword = md5(password);

    const loginBody = {
      email,
      password: encriptedPassword,
    };

    try {
      const successStatus = 201;
      console.log(loginBody);
      const { data: user, message, status } = await api.post('/login', loginBody);

      return status === successStatus ? redirect(`/${user.role}`) : setError(message);
    } catch (err) {
      setError('Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <p>Login</p>
        <input
          type="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Insira seu email"
          data-testid="common_login__input-email"
        />
        <p>Senha</p>
        <input
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Insira sua senha"
          data-testid="common_login__input-password"
        />
        <button
          type="submit"
          data-testid="common_login__button-login"
          disabled={ isInvalid }
        >
          LOGIN
        </button>
      </form>
      <Link
        to="/register"
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </Link>
      { error !== ''
        ? <p data-testid="common_login__element-invalid-email">{error}</p>
        : null }
    </div>
  );
}

export default Login;
