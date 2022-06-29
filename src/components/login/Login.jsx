import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-container-wrapper">
        <h1 className="login-container-title">Banking Application</h1>
        <table className="login-form">
          <tr>
            <td>
              <label htmlFor="email">Email address</label>
            </td>
            <td>
              <input id="email" type="mail" name="email" required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">Password</label>
            </td>
            <td>
              <input id="password" type="password" name="password" required />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="Login" id="login-btn" />
            </td>
            <td>
              <input
                type="button"
                value="Create account"
                id="create-account-btn"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Login;
