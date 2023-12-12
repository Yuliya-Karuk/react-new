import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter your login" />
        <MyInput type="password" placeholder="Enter your password" />
        <MyButton >Login</MyButton>
      </form>
    </div>
  );
};

export default Login;