import React from 'react'
import "./Css/login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <b className="loginTitle">Login</b>
            <div className="loginForm">
                <label >Email</label>
                <input type="email" className="loginInput" placeholder="Enter you email"/>
                <label >Password</label>
                <input type="passwod" className="loginInput" placeholder="Enter your password"/>

                <button className="loginButton">Submit</button>
            </div>
            <Link to="/register" className="loginRegisterButton">Register</Link>
        </div>
    )
}

export default Login
