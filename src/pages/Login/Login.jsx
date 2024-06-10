// import { useState } from "react";
import React, { useState } from "react";
import "./Login.css";
// import logo from "../../assets/mylogo.jpg";

const Login = () => {
  // we use useState when we want react to keep track of a component that might change later
  const [signState, setSignState] = useState("Sign In");
  return (
    <div className="login">
      {/* <img src={logo} alt="" className="login-logo" /> */}
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {/* "Your name" is conditionally rendered. It appears only if signState is 'Sign Up'. */}
          {signState === "Sign Up" ? (
            <input type="text" placeholder="Your name" />
          ) : (
            <> </>
          )}

          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="password" />
          <button>{signState}</button>
          {/* Checkbox and help links */}
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <p className="need-help">Need Help?</p>
          </div>
        </form>
        {/* Switch Forms Section */}
        <div className="form-switch">
          {/* content of this h1 tag depends on the value of signState. It displays either "Sign In" or "Sign Up". */}
          {signState === "Sign In" ? (
            <p>
              New to Netify?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                {" "}
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In{" "}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
