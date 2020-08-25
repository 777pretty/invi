import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "../../../context/AuthContext";
import "../login/MainLogin.css";

function MainLogin() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");

  const { auth, token, userId } = useContext(AuthContext);
  const [isAuth, setIsAuth] = auth;
  const [tokenValue, setTokenValue] = token;
  const [userIdValue, setUserIdValue] = userId;

  const onSubmit = (data) => {
    axios
      .post("/auth/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        setIsAuth(true);
        setTokenValue(res.data.token);
        setUserIdValue(res.data.userId);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        history.goBack();
      })
      .catch((err) => {
        setErrorMessage("Invalid input or email does not exist.");
      });
  };

  return (
    <div className="LoginContainer">
      <div className="LoginFormWrapper">
        <div className="LoginForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.password && (
              <p className="LoginText" style={{ color: "red" }}>
                Password is invalid
              </p>
            )}
            {errors.email && (
              <p className="LoginText" style={{ color: "red" }}>
                Email is invalid
              </p>
            )}
            <p className="LoginText" style={{ color: "red" }}>
              {errorMessage}
            </p>
            <div className="LoginHeading">LOGIN</div>
            <p className="LoginText">Please enter your e-mail and password:</p>
            <input
              type="email"
              placeholder="Email address"
              name="email"
              autocomplete="username"
              ref={register({ required: true, minLength: 5 })}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              autocomplete="current-password"
              ref={register({ required: true, minLength: 5 })}
            />
            <button type="submit" className="btn effect01" target="_blank">
              <span>LOGIN</span>
            </button>
          </form>
          <br />
          <div className="LoginText">
            Don't have an account yet?{" "}
            <Link to="/register" style={{ color: "inherit" }}>
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLogin;
