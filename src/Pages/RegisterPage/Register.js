import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../Redux/reducers/login";
import { Password } from "../../Redux/reducers/login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userNameHandler = (event) => {
    dispatch(Login(event.target.value));
    console.log(state.login);
  };

  const passwordHandler = (event) => {
    dispatch(Password(event.target.value));
    console.log(state.password);
  };

  return (
    <div className="login-container">
      <span className="login-title">Register</span>
      <form>
        <input className="form-input" onChange={userNameHandler} placeholder="developer12" />
        <input className="form-input" onChange={passwordHandler} placeholder="123456" />
        <div className="login-register-buttons">
          <Link to="/profile" className="auth-button not-active">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
