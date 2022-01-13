import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginAndRedirect from '../helper/api/loginAndRedirect';
import { validateEmail, validatePassword } from '../helper/validations';
import '../helper/css/Login.css';

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
    <div className="loginContainer">
      <Form className="box" onSubmit={ handleSubmit }>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>EMAIL</Form.Label>
          <Form.Control
            type="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="Insira seu email"
            data-testid="common_login__input-email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>SENHA</Form.Label>
          <Form.Control
            type="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="Insira sua senha"
            data-testid="common_login__input-password"
          />
        </Form.Group>
        <Form.Text className="text-muted">
          { error !== ''
            ? <p data-testid="common_login__element-invalid-email">{error}</p>
            : null }
        </Form.Text>
        <div className="d-grid gap-2">
          <Button
            className="loginButtons"
            type="submit"
            data-testid="common_login__button-login"
            disabled={ isInvalid }
            variant="success"
          >
            Login
          </Button>
          <Button
            className="loginButtons"
            type="button"
            onClick={ () => redirect('/register') }
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </Button>
        </div>
      </Form>
      {/* <h1>Login</h1>
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
    </div> */}
    </div>
  );
}

export default Login;
