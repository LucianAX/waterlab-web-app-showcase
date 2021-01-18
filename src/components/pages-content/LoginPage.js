import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function LoginPage(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

//   LOGIC CODE GOES HERE !!

  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800"
        style={{ textAlign: 'center' }}>
          Login
    </h1>

    <div className="form">
      <div className="form-toggle"></div>

      <div className="form-panel one">
        <div className="form-header">
          <img src="../../../public/SB-Admin/img/logo.png" alt="logo" />
        </div>

        <div className="form-content">
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required="required"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required="required"/>
            </div>
            <div className="form-group">
              <label className="form-remember">
                <input type="checkbox"/>Remember Me
              </label><a className="form-recovery" href="#">Forgot Password?</a>
            </div>
            <div className="form-group">
              <button type="submit">
                <Link to="/overview" style={{ color: "white" }}>Log In</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="form-panel two">
        <div className="form-header">
          <h1>Register Account</h1>
        </div>
        
        <div className="form-content">
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" required="required"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" required="required"/>
            </div>
            <div className="form-group">
              <label for="cpassword">Confirm Password</label>
              <input type="password" id="cpassword" name="cpassword" required="required"/>
            </div>
            <div className="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" name="email" required="required"/>
            </div>
            <div className="form-group">
              <button type="submit">
                <Link to="/overview" style={{ color: "white" }}>Register</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>)
};

export default LoginPage;