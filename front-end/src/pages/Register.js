import React from 'react'
import React, { useEffect, useState } from 'react';
import { validateEmail, validatePassworld, validateName } from '../helper/validations';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [isInvalid, setIsInvalid] = useState(true);
  const [error, setError] = useState('');
  const validateData = () => {

    if (email === '' && password === '') return;

    if (validateEmail(email)
        && validatePassworld(password)
        && validateName(name)) {
          setIsInvalid(false);
          setError('');
    } else {
        setIsInvalid(true);
        setError('Dados inválidos.');
    }
  };

  useEffect(validateData, [email, password]);


    return (
        <div>
        <h1>Cadastro </h1>
        <form onSubmit={ handleSubmit }>
        <p>Nome</p>
          <input
            type="text"
            id="name"
            name="name"
            value={ name }
            onChange={ (e) => setName(e.target.value) }
            placeholder="Insira seu nome"
            data-testid="common_register__input-name"
          />
          <p>Email</p>
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="Insira seu email"
            data-testid="common_register__input-email"
          />
          <p>Senha</p>
          <input
            type="password"
            name="password"
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
          ? <p data-testid="common_login__element-invalid-email">{error}</p>
          : null }
      </div>
    )
}

export default Register
