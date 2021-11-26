import React from 'react';
import "./Css/header.css";
import HeaderContent from './HeaderContent';
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <HeaderContent />
            <Link to="/login" className="loginRegisterButton">Login</Link>
        </div>
    )
}

export default Header;
