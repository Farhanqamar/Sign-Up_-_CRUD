import React from 'react';
import signup_style from "./CSS/Signup.module.scss";


function SignUp() {
  return (
    <>
      <section>
        <div className={`${signup_style.signup_box}`}>
          <div className={`${signup_style.heading}`}>
            <h2>Sign Up Page</h2>
          </div>
          <form>
          <div className={`${signup_style.inp}`}>
              <label>User Name</label>
              <input type="text" />
            </div>
            <div className={`${signup_style.inp}`}>
              <label>Email</label>
              <input type="text" />
            </div>
            <div className={`${signup_style.inp}`}>
              <label>Password</label>
              <input type="text" />
            </div>
            <div className={`${signup_style.inp}`}>
              <label>Canform Password</label>
              <input type="text" />
            </div>

            <div className={`${signup_style.btn}`}>
              <input type="submit" className={`${signup_style.submit_input}`}/>
            </div>
            <p>If you have already account Login</p>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
