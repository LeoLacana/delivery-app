import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../helper/api';
import { validateEmail, validatePassword, validateName } from '../helper/validations';

function Register() {
  const redirect = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [isInvalid, setIsInvalid] = useState(true);
  const [error, setError] = useState('');

  const validateData = () => {
    if (
      name === ''
      && email === ''
      && password === ''
    ) return;

    if (
      validateEmail(email)
      && validatePassword(password)
      && validateName(name)
    ) {
      setIsInvalid(false);
      setError('');
    } else {
      setIsInvalid(true);
      setError('Dados inválidos.');
    }
  };

  useEffect(validateData, [name, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const registerBody = {
      name,
      email,
      password,
    };

    try {
      const successStatus = 201;
      const { message, status } = await api.post('/register', registerBody);

      return status === successStatus
        ? redirect('/login')
        : setError(message);
    } catch (err) {
      console.log(err.message);
      setError('Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <h1>Cadastro </h1>
      <form onSubmit={ handleSubmit }>
        <p>Nome</p>
        <input
          type="text"
          value={ name }
          onChange={ (e) => setName(e.target.value) }
          placeholder="Insira seu nome"
          data-testid="common_register__input-name"
        />
        <p>Email</p>
        <input
          type="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Insira seu email"
          data-testid="common_register__input-email"
        />
        <p>Senha</p>
        <input
          type="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Insira sua senha"
          data-testid="common_register__input-password"
        />
        <button
          type="submit"
          data-testid="common_register__button-register"
          disabled={ isInvalid }
        >
          CADASTRAR
        </button>
      </form>
      { error !== ''
        ? <p data-testid="common_register__element-invalid_register">{error}</p>
        : null }
    </div>
  );
}

export default Register;