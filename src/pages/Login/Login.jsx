import React from 'react'
import './Login.css'
// import mylogo from '../../assets/mylogo.jpg'

import logo from '../../assets/mylogo.jpg'
const Login = () => {
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      {/* <img src={logo} alt=''/> */}
      <div className="login-form">
        <h1>Sign In</h1>
        <form action=""></form>
      </div>
    </div>
  )
}

export default Login