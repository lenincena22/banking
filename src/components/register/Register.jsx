import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-conainer-wrapper">
        <h1 className="register-container-title">Banking Application</h1>
        <table className="register-form-table">
          <tr>
            <td>
              <label htmlFor="fname">First name</label>
            </td>
            <td>
              <input id="fname" type="text" name="fname" required />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="lname">Last name</label>
            </td>
            <td>
              <input id="lname" type="text" name="lname" required />
            </td>
          </tr>
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
              <label htmlFor="confirm-password">Confirm password</label>
            </td>
            <td>
              <input
                id="confirm-password"
                type="password"
                name="confirm-password"
                required
              />
            </td>
          </tr>
          <tr>
            <td>
              <input type="button" value="Register" id="register-btn" />
            </td>
            <td>
              <input type="button" value="Login" id="register-login-btn" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Register;
