import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import loginAndRedirect from '../helper/loginAndRedirect';
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

    try {
      const response = await loginAndRedirect({ email, password }, redirect);

      if (response.err) setError(response.err);
    } catch (err) {
      setError(err.message);
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
      <button
        type="button"
        onClick={ () => redirect('/register') }
        data-testid="common_login__button-register"
      >
        Ainda não tenho conta
      </button>
      { error !== ''
        ? <p data-testid="common_login__element-invalid-email">{error}</p>
        : null }
    </div>
  );
}

export default Login;
