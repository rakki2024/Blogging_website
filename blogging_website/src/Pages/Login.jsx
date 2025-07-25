import React from "react";

function Login() {
  return (
    <div className="login-form">
      <div className="blur"></div>
      <form className="login-page">
        <h1>Please Login</h1>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
          <button className="btn btn-success w-100 mt-3">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
