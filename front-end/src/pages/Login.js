import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../helper/api';
import md5 from 'md5';

function Login() {
  const redirect = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isInvalid, setIsInvalid] = useState(true);
  const [error, setError] = useState('');

  const handleInputChange = async ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const validateData = () => {
    const emailRegex = /^[a-z][.a-z\d_-]+[^-]@[a-z-]{2,12}\.[a-z]{2,3}(\.[a-z]{2})?$/i;
    const minLength = 6;

    if (email === '' && password === '') return;

    if (emailRegex.test(email) && password.length >= minLength) {
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

    try{
      const response = await api.post('/login', loginBody);
      if(response.message) {
        setError(response.message)
    }
      else { redirect('/customer'); }
    } catch(error){
        setError(error.message)
    }
  
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleSubmit }>
        <p>Login</p>
        <input
          type="email"
          id="email"
          name="email"
          value={ email }
          onChange={ handleInputChange }
          placeholder="Insira seu email"
          data-testid="common_login__input-email"
        />
        <p>Senha</p>
        <input
          type="password"
          name="password"
          value={ password }
          onChange={ handleInputChange }
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
