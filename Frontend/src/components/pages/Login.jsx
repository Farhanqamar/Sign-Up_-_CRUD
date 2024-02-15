import React from "react";
import login_style from "./CSS/Login.module.scss";

function Login() {
  return (
    <>
      <section className={`${login_style.section}`}>
        <div className={`${login_style.login_box}`}>
          <div className={`${login_style.heading}`}>
            <h2>Login Page</h2>
          </div>
          <form>
          
            <div className={`${login_style.inp}`}>
              <label>Email</label>
              <input type="text" />
            </div>
            <div className={`${login_style.inp}`}>
              <label>Password</label>
              <input type="text" />
            </div>
            

            <div className={`${login_style.btn}`}>
              <input type="submit" className={`${login_style.submit_input}`}/>
            </div>
            <p>Don't have an Account? Sign Up</p>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
